export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src", // default value is "."
      output: "_site" // is the default value
    }
  };
};

