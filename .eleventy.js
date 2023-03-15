module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('assets');
	eleventyConfig.addPassthroughCopy('admin/');
	return {
		dir: {
			includes: '_includes',
			layouts: '_layouts',
		}
	};
};