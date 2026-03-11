export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add split filter
  eleventyConfig.addFilter("split", function(str, separator) {
    if (!str) return [];
    return str.split(separator);
  });

  eleventyConfig.addFilter("readablePostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "Europe/Amsterdam",
    }).setLocale('en').toLocaleString(DateTime.DATE_FULL);
  });


  return {
    pathPrefix: "/events/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
}
