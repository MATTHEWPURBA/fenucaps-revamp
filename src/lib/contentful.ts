import { createClient, Entry, EntryFieldTypes } from 'contentful';

// Debug environment variables
console.log('Contentful Config:', {
  spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  hasAccessToken: !!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// Define Entry Skeleton Types for each content type
export interface ProductSkeleton {
  contentTypeId: 'product';
  fields: {
    name: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    price: EntryFieldTypes.Integer;
    salePrice?: EntryFieldTypes.Integer;
    images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    category: EntryFieldTypes.Symbol;
    inStock: EntryFieldTypes.Boolean;
    stockQuantity: EntryFieldTypes.Integer;
    benefits?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    ingredients: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    usage: EntryFieldTypes.Text;
    warnings?: EntryFieldTypes.Text;
    certification?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  };
}

export interface ReviewSkeleton {
  contentTypeId: 'review';
  fields: {
    customerName: EntryFieldTypes.Symbol;
    rating: EntryFieldTypes.Integer;
    comment: EntryFieldTypes.Text;
    location: EntryFieldTypes.Symbol;
    productId: EntryFieldTypes.Symbol;
    verified?: EntryFieldTypes.Boolean;
    date: EntryFieldTypes.Date;
  };
}

export interface BlogPostSkeleton {
  contentTypeId: 'blogPost';
  fields: {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    excerpt: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    featuredImage: EntryFieldTypes.AssetLink;
    author: EntryFieldTypes.Symbol;
    publishedDate: EntryFieldTypes.Date;
    category: EntryFieldTypes.Symbol;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  };
}

// Create typed client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

// Export proper TypeScript types for components
export type Product = Entry<ProductSkeleton, undefined, string>;
export type Review = Entry<ReviewSkeleton, undefined, string>;
export type BlogPost = Entry<BlogPostSkeleton, undefined, string>;

// Helper types for accessing field values easily
export interface ProductFields {
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice?: number;
  images: Array<{
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  }>;
  category: string;
  inStock: boolean;
  stockQuantity: number;
  benefits?: string[];
  ingredients: string[];
  usage: string;
  warnings?: string;
  certification?: string[];
}

export interface ReviewFields {
  customerName: string;
  rating: number;
  comment: string;
  location: string;
  productId: string;
  verified?: boolean;
  date: string;
}

export interface BlogPostFields {
  title: string;
  slug: string;
  excerpt: string;
  content: any; // Rich text content
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  author: string;
  publishedDate: string;
  category: string;
  tags?: string[];
}


// Test connection function
export async function testConnection() {
  try {
    const space = await client.getSpace();
    console.log('✅ Contentful connection successful:', space.name);
    return true;
  } catch (error) {
    console.error('❌ Contentful connection failed:', error);
    return false;
  }
}



// API Functions with proper typing
export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await client.getEntries({
      content_type: 'product',
    });
    return response.items as Product[];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await client.getEntries({
      content_type: 'product',
      'fields.slug': slug,
      limit: 1,
    });
    return (response.items[0] as Product) || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function getProductReviews(productId: string): Promise<Review[]> {
  try {
    const response = await client.getEntries({
      content_type: 'review',
      'fields.productId': productId,
      order: ['-fields.date'],
    });
    return response.items as Review[];
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishedDate'],
    });
    return response.items as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    return (response.items[0] as BlogPost) || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Additional helper functions
export async function getFeaturedProducts(limit: number = 4): Promise<Product[]> {
  try {
    const response = await client.getEntries({
      content_type: 'product',
      'fields.inStock': true,
      order: ['-sys.createdAt'],
      limit,
    });
    return response.items as Product[];
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const response = await client.getEntries({
      content_type: 'product',
      'fields.category': category,
      'fields.inStock': true,
    });
    return response.items as Product[];
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
}

export async function getRecentBlogPosts(limit: number = 6): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishedDate'],
      limit,
    });
    return response.items as BlogPost[];
  } catch (error) {
    console.error('Error fetching recent blog posts:', error);
    return [];
  }
}

// Helper function to safely access field values
export function getProductFields(product: Product): ProductFields {
  return {
    name: product.fields.name || '',
    slug: product.fields.slug || '',
    description: product.fields.description || '',
    price: product.fields.price || 0,
    salePrice: product.fields.salePrice,
    images: (product.fields.images as any) || [],
    category: product.fields.category || '',
    inStock: product.fields.inStock ?? true,
    stockQuantity: product.fields.stockQuantity || 0,
    benefits: product.fields.benefits || [],
    ingredients: product.fields.ingredients || [],
    usage: product.fields.usage || '',
    warnings: product.fields.warnings,
    certification: product.fields.certification || [],
  };
}

export function getReviewFields(review: Review): ReviewFields {
  return {
    customerName: review.fields.customerName || '',
    rating: review.fields.rating || 5,
    comment: review.fields.comment || '',
    location: review.fields.location || '',
    productId: review.fields.productId || '',
    verified: review.fields.verified ?? false,
    date: review.fields.date || new Date().toISOString(),
  };
}

export function getBlogPostFields(blogPost: BlogPost): BlogPostFields {
  return {
    title: blogPost.fields.title || '',
    slug: blogPost.fields.slug || '',
    excerpt: blogPost.fields.excerpt || '',
    content: blogPost.fields.content,
    featuredImage: (blogPost.fields.featuredImage as any) || { fields: { file: { url: '' }, title: '' } },
    author: blogPost.fields.author || '',
    publishedDate: blogPost.fields.publishedDate || new Date().toISOString(),
    category: blogPost.fields.category || '',
    tags: blogPost.fields.tags || [],
  };
}

// src/lib/contentful.ts
