const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // installed via npm
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const buildPath = path.resolve(__dirname, "dist");

module.exports = {
  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: "source-map",

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: "./src/page-index/main.js",
    about: "./src/page-about/main.js",
    adminProducts: "./src/page-admin-products/main.js",
    adminHome: "./src/page-admin-home/main.js",
    newCollection: "./src/page-new-collection/main.js",
    men: "./src/page-men/main.js",
    women: "./src/page-women/main.js",
    kids: "./src/page-kids/main.js"
  },

  // how to write the compiled files to disk
  // https://webpack.js.org/concepts/output/
  output: {
    filename: "[name].[hash:20].js",
    path: buildPath
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              limit: 10000,
              mimetype: "application/font-woff"
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[path][name].[ext]",
              limit: 10000
            }
          },
          "img-loader"
        ]
      },
      {
        test: /\.hbs$/,
        use: "handlebars-loader"
      }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new CleanWebpackPlugin(), // cleans output.path by default
    new CopyWebpackPlugin([{ from: "src/img", to: "img" }]),
    new HtmlWebpackPlugin({
      template: "./src/page-index/tmpl.html",
      chunks: ["index"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-about/tmpl.html",
      chunks: ["about"],
      filename: "about.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-admin-products/tmpl.html",
      chunks: ["adminProducts"],
      filename: "admin-products.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-admin-home/tmpl.html",
      chunks: ["adminHome"],
      filename: "admin-home.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-new-collection/tmpl.html",
      chunks: ["newCollection"],
      filename: "new-collection.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-men/tmpl.html",
      chunks: ["men"],
      filename: "men.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-women/tmpl.html",
      chunks: ["women"],
      filename: "women.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-kids/tmpl.html",
      chunks: ["kids"],
      filename: "kids.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    })
  ],

  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  }
};
