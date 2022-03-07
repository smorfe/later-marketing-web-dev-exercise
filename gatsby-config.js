module.exports = {
	siteMetadata: {
		title: `Later - Marketing Web Dev Exercise`,
		siteUrl: `https://www.yourdomain.tld`
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				"accessToken": "_adL91ahLu7jCW-7eCHBQhzJYiqoJEEHIdgoR4zLNTY",
				"spaceId": "fetlaavmpfux"
			}
		},
		"gatsby-plugin-fontawesome-css",
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`rubik\:400,500,400i,500i`,
					`poppins\:400,500,400i,500i`
				],
				display: 'swap'
			}
		},
		"gatsby-transformer-remark"
	]
};