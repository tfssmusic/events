export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/assets/js");

  // Add split filter
  eleventyConfig.addFilter("split", function(str, separator) {
    if (!str) return [];
    return str.split(separator);
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const d = new Date(dateObj);
    const adjusted = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    return adjusted.toLocaleDateString("en-US", { 
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  return {
    pathPrefix: "/events/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
}
