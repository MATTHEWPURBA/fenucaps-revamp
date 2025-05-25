// src/app/shop/page.tsx
import { getAllProducts } from '@/lib/contentful';
import ProductGrid from '@/app/components/ProductGrid';
import ShopFilters from '@/app/components/ShopFilters';

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Produk ASI Booster Terbaik
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilihan lengkap suplemen ASI booster berbahan alami dengan 
            sertifikasi internasional untuk mendukung menyusui Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ShopFilters />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
