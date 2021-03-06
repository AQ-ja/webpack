const presets = [
  [
    "@babel/env",
    {
        useBuiltIns: "usage",
        corejs: "3",
        targets: "> 0.25%, not dead, not ie 11",
    },
  ],
];
const plugins = [
    "@babel/plugin-transform-block-scoped-functions",
    "@babel/plugin-transform-arrow-functions"
];

module.exports = {presets, plugins};