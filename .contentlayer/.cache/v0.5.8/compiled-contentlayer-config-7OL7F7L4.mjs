// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    excerpt: {
      type: "string",
      required: true
    },
    slug: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      default: []
    },
    featured: {
      type: "boolean",
      default: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post.slug}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7OL7F7L4.mjs.map
