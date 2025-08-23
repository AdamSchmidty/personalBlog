export interface Post {
  _id: string;
  _raw: Record<string, unknown>; // Contentlayer will generate the proper type
  type: "Post";
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  featured: boolean;
  url: string;
  body: Record<string, unknown>; // Contentlayer will generate the proper MDX type
}

export interface SearchResult {
  item: Post;
  refIndex: number;
  score: number;
}

export interface SearchIndex {
  posts: Post[];
  lastUpdated: string;
}
