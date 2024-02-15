const tsBase = require("./tsconfig.base.json")

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === "development"

modules.export = api => {
  api.cache.using(() => process.env.NODE_ENV)

  return {
    presets: [
      "module:metro-react-native-babel-preset",
      "@babel/preset-env",
      isDevelopment && "@babel/preset-typescript",
    ].filter(Boolean),
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".tsx", ".ts", ".js", "jsx", ".json"],
          alias: Object.entries(tsBase.path).reduce((ret, [aliasKey, path]) => {
            if (typeof path === "string") {
              return {
                ...ret,
                [aliasKey.replace("/*", "")]: path.replace("/*", ""),
              }
            }
            return ret
          }, {}),
        },
      ],
      "react-native-reanimated/plugin",
    ],
  }
}
