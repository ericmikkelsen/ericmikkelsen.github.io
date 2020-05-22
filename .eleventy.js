const imageSize = require('./modules/imageSize')
module.exports = eleventyConfig => {
    
    eleventyConfig.addFilter("imageSize", async filePath => {
        return await imageSize(__dirname + filePath)
    });
    eleventyConfig.addPassthroughCopy("uploads");
};