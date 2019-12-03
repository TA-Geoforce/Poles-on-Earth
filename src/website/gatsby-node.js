/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, rules, loaders, actions }) => {
    switch (stage) {
      case 'build-html':
            const regex = [
                /node_modules\/leaflet/,
                /node_modules\/react-leaflet/,
                /node_modules\\leaflet/,
                /node_modules\\react-leaflet/
              ]
        actions.setWebpackConfig({
          module: {
            rules: [
              {
                test: regex,
                use: [loaders.null()]
              }
            ]
          }
        });
        break;
    }
  };
