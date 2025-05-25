// src/app/shop/[slug]/page.tsx
import { getProductBySlug, getProductReviews } from '@/lib/contentful';
import ProductDetail from '@/app/components/ProductDetail';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  const reviews = await getProductReviews(product.sys.id);

  return <ProductDetail product={product} reviews={reviews} />;
}
