// next.config.js
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  optimizedImages:{},
  future: {
    webpack5: true,
  },
});
