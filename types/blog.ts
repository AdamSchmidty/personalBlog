export interface Post {
  _id: string;
  _raw: {
    sourceFilePath: string;
    sourceFileName: string;
    sourceFileDir: string;
    contentType: string;
    flattenedPath: string;
  };
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  featured: boolean;
  url: string;
  body: string;
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
