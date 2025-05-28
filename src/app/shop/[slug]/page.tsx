// src/app/shop/[slug]/page.tsx
import { getProductBySlug, getProductReviews } from '@/lib/contentful';
import ProductDetail from '@/app/components/ProductDetail';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  // Await the params since it's now a Promise in Next.js 15
  const { slug } = await params;
  
  const product = await getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  const reviews = await getProductReviews(product.sys.id);

  return <ProductDetail product={product} reviews={reviews} />;
}