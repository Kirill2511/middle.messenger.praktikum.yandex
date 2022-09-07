const autoprefixer = require('autoprefixer');

module.exports = {
  syntax: 'postcss',
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    autoprefixer,
    'postcss-normalize': {},
    'postcss-nested': {},
  },
};
