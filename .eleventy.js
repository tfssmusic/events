export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src", // default value is "."
      output: "_site" // is the default value
    }
  };
};

