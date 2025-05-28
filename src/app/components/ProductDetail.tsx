// src/app/components/ProductDetail.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid';
import { useCart } from '@/contexts/CartContext';
import { Product, Review, getProductFields, getReviewFields } from '@/lib/contentful';

interface ProductDetailProps {
  product: Product;
  reviews: Review[];
}

export default function ProductDetail({ product, reviews }: ProductDetailProps) {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  // Get typed field values
  const productFields = getProductFields(product);

  // Helper function to safely get image URL
  const getImageUrl = (image: any): string => {
    if (!image?.fields?.file?.url) return '';
    const url = image.fields.file.url;
    return typeof url === 'string' ? url : '';
  };

  const addToCart = () => {
    const firstImage = productFields.images[0];
    const imageUrl = firstImage ? getImageUrl(firstImage) : '';
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.sys.id,
        name: productFields.name,
        price: productFields.salePrice || productFields.price,
        quantity,
        image: imageUrl,
      },
    });
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => {
        const reviewFields = getReviewFields(review);
        return sum + reviewFields.rating;
      }, 0) / reviews.length 
    : 4.8;

  // Check if we have images
  const hasImages = productFields.images && productFields.images.length > 0;
  const currentImage = hasImages ? productFields.images[selectedImage] : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="relative h-96 mb-4 rounded-xl overflow-hidden bg-gray-200">
              {currentImage && getImageUrl(currentImage) ? (
                <Image
                  src={`https:${getImageUrl(currentImage)}`}
                  alt={productFields.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-400">No Image Available</span>
                </div>
              )}
            </div>
            
            {hasImages && (
              <div className="flex space-x-2">
                {productFields.images.map((image, index) => {
                  const imageUrl = getImageUrl(image);
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-20 w-20 rounded-lg overflow-hidden bg-gray-200 ${
                        selectedImage === index ? 'ring-2 ring-primary-600' : ''
                      }`}
                    >
                      {imageUrl ? (
                        <Image
                          src={`https:${imageUrl}`}
                          alt={`Product image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="text-xs text-gray-400">No Img</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {productFields.name}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(averageRating) ? '' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                ({averageRating.toFixed(1)}) • {reviews.length} ulasan
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              {productFields.salePrice ? (
                <>
                  <span className="text-3xl font-bold text-primary-600">
                    Rp {productFields.salePrice.toLocaleString('id-ID')}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    Rp {productFields.price.toLocaleString('id-ID')}
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-bold">
                    HEMAT {Math.round((1 - productFields.salePrice / productFields.price) * 100)}%
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-primary-600">
                  Rp {productFields.price.toLocaleString('id-ID')}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6">
              {productFields.description}
            </p>

            {/* Certifications */}
            {productFields.certification && productFields.certification.length > 0 && (
              <div className="flex items-center space-x-2 mb-6">
                <span className="font-semibold">Sertifikat:</span>
                {productFields.certification.map((cert, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    {cert}
                  </span>
                ))}
              </div>
            )}

            {/* Stock Status */}
            <div className="mb-6">
              {productFields.inStock ? (
                <div className="flex items-center text-green-600">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Stok tersedia ({productFields.stockQuantity} unit)</span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>Stok habis</span>
                </div>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Jumlah:</span>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={addToCart}
                disabled={!productFields.inStock}
                className="flex-1 btn-primary flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <span>Tambah ke Keranjang</span>
              </button>

              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <HeartIcon className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button className="btn-secondary">
                Beli Langsung
              </button>
              <button className="btn-primary">
                Konsultasi WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="border-b mb-8">
            <nav className="flex space-x-8">
              {[
                { id: 'description', label: 'Deskripsi' },
                { id: 'ingredients', label: 'Kandungan' },
                { id: 'usage', label: 'Cara Pakai' },
                { id: 'reviews', label: `Ulasan (${reviews.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-bold mb-4">Deskripsi Produk</h3>
                <p className="text-gray-600 leading-relaxed">
                  {productFields.description}
                </p>
                {productFields.benefits && productFields.benefits.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Manfaat:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {productFields.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-xl font-bold mb-4">Kandungan</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {productFields.ingredients.map((ingredient, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-primary-600">{ingredient}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div>
                <h3 className="text-xl font-bold mb-4">Cara Penggunaan</h3>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {productFields.usage}
                  </p>
                </div>
                {productFields.warnings && (
                  <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Peringatan:</h4>
                    <p className="text-yellow-700">{productFields.warnings}</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-bold mb-6">Ulasan Pelanggan</h3>
                <div className="space-y-6">
                  {reviews.map((review) => {
                    const reviewFields = getReviewFields(review);
                    return (
                      <div key={review.sys.id} className="border-b pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <h4 className="font-semibold">{reviewFields.customerName}</h4>
                            {reviewFields.verified && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                Terverifikasi
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{reviewFields.location}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon 
                                key={i} 
                                className={`h-4 w-4 ${i < reviewFields.rating ? '' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-500">
                            {new Date(reviewFields.date).toLocaleDateString('id-ID')}
                          </span>
                        </div>
                        <p className="text-gray-700">&ldquo;{reviewFields.comment}&rdquo;</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}