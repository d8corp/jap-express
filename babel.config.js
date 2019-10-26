module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {node: 'current'},
        useBuiltIns: 'usage',
      },
    ],
    ['minify']
  ],
  ignore: ["**/*.test.js"],
  comments: false
}
