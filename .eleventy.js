export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    pathPrefix: "/events/",
    dir: {
      input: "src", // default value is "."
      output: "_site" // is the default value
    }
  };
};

