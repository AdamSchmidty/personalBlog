import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    excerpt: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      default: [],
    },
    featured: {
      type: "boolean",
      default: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
