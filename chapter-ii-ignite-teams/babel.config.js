module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@dtos": "./src/dtos",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@themes": "./src/themes",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};