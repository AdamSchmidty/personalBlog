const fs = require("fs");
const path = require("path");

// This script will be run during build time to generate search index
// It reads the Contentlayer generated posts and creates a search index

const postsIndexPath = path.join(
  process.cwd(),
  ".contentlayer",
  "generated",
  "Post",
  "_index.json"
);
const outputPath = path.join(process.cwd(), "public", "search-index.json");

function generateSearchIndex() {
  try {
    // Check if posts index file exists
    if (!fs.existsSync(postsIndexPath)) {
      console.log(
        "Posts index file not found, skipping search index generation"
      );
      return;
    }

    const postsData = JSON.parse(fs.readFileSync(postsIndexPath, "utf8"));
    const posts = [];

    postsData.forEach((postData) => {
      // Extract searchable content
      posts.push({
        title: postData.title,
        excerpt: postData.excerpt,
        tags: postData.tags || [],
        slug: postData.slug,
        date: postData.date,
        url: postData.url,
      });
    });

    const searchIndex = {
      posts,
      lastUpdated: new Date().toISOString(),
    };

    // Ensure public directory exists
    const publicDir = path.dirname(outputPath);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2));
    console.log(`Search index generated with ${posts.length} posts`);
  } catch (error) {
    console.error("Error generating search index:", error);
  }
}

generateSearchIndex();
