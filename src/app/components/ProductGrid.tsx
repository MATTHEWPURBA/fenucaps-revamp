// src/app/components/ProductGrid.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useCart } from '@/contexts/CartContext';
import { Product, getProductFields } from '@/lib/contentful';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { dispatch } = useCart();
  const [sortBy, setSortBy] = useState('name');

  const sortedProducts = [...products].sort((a, b) => {
    const aFields = getProductFields(a);
    const bFields = getProductFields(b);
    
    switch (sortBy) {
      case 'price-low':
        return (aFields.salePrice || aFields.price) - (bFields.salePrice || bFields.price);
      case 'price-high':
        return (bFields.salePrice || bFields.price) - (aFields.salePrice || aFields.price);
      case 'name':
      default:
        return aFields.name.localeCompare(bFields.name);
    }
  });

  const addToCart = (product: Product) => {
    const productFields = getProductFields(product);
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.sys.id,
        name: productFields.name,
        price: productFields.salePrice || productFields.price,
        quantity: 1,
        image: productFields.images[0]?.fields.file.url || '',
      },
    });
  };

  return (
    <div>
      {/* Sort Controls */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Menampilkan {sortedProducts.length} produk
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500"
        >
          <option value="name">Urutkan: Nama A-Z</option>
          <option value="price-low">Harga: Rendah ke Tinggi</option>
          <option value="price-high">Harga: Tinggi ke Rendah</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => {
          const productFields = getProductFields(product);
          
          return (
            <div key={product.sys.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link href={`/shop/${productFields.slug}`}>
                <div className="relative h-64">
                  {productFields.images[0] && (
                    <Image
                      src={`https:${productFields.images[0].fields.file.url}`}
                      alt={productFields.name}
                      fill
                      className="object-cover"
                    />
                  )}
                  {productFields.salePrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                      SALE
                    </div>
                  )}
                  {!productFields.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold">STOK HABIS</span>
                    </div>
                  )}
                </div>
              </Link>

              <div className="p-6">
                <Link href={`/shop/${productFields.slug}`}>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 hover:text-primary-600 line-clamp-2">
                    {productFields.name}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {productFields.description}
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(4.8)</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {productFields.salePrice ? (
                      <>
                        <span className="text-xl font-bold text-primary-600">
                          Rp {productFields.salePrice.toLocaleString('id-ID')}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          Rp {productFields.price.toLocaleString('id-ID')}
                        </span>
                      </>
                    ) : (
                      <span className="text-xl font-bold text-primary-600">
                        Rp {productFields.price.toLocaleString('id-ID')}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    disabled={!productFields.inStock}
                    className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 text-sm"
                  >
                    <ShoppingCartIcon className="h-4 w-4" />
                    <span>Beli</span>
                  </button>
                </div>

                {/* Certifications */}
                {productFields.certification && productFields.certification.length > 0 && (
                  <div className="flex items-center space-x-2 pt-4 border-t">
                    <span className="text-sm text-gray-500">Sertifikat:</span>
                    <div className="flex flex-wrap gap-1">
                      {productFields.certification.map((cert, index) => (
                        <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Tidak ada produk yang ditemukan.</p>
        </div>
      )}
    </div>
  );
}