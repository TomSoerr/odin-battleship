module.exports = {
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};
// TODO:
// npm i -D identity-obj-proxy jest-environment-jsdom
// .gitignore add .vscode and jest.config.js
