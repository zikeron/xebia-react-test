module.exports = {
  verbose: true,
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$':
      '<rootDir>/node_modules/jest-css-modules-transform',
  },
  moduleFileExtensions: ['js', 'jsx'],
};
