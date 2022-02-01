const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
    // zone_creation: path.resolve(__dirname, "./src/index_zone_creation.js"),
    // zones: path.resolve(__dirname, "./src/index_zones.js"),
    // analysis: path.resolve(__dirname, "./src/index_analysis.js"),
  },

  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].bundle.js",
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   title: "Zone Creation",
    //   template: path.resolve(__dirname, "./src/template_zones.html"),
    //   filename: "zones.html",
    //   chunks: ["zones"],
    // }),
    // new HtmlWebpackPlugin({
    //   title: "Zone Creation",
    //   template: path.resolve(__dirname, "./src/template_create_zone.html"),
    //   filename: "create_zone.html",
    //   chunks: ["zone_creation"],
    // }),
    // new HtmlWebpackPlugin({
    //   title: "Analysis",
    //   template: path.resolve(__dirname, "./src/template_analysis.html"),
    //   filename: "analysis.html",
    //   chunks: ["analysis"],
    // }),
    new HtmlWebpackPlugin({
      title: "Delaware County Trailheads",
      template: path.resolve(__dirname, "./src/template_index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/img",
          to: "img",
          toType: "dir",
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    // contentBase: path.resolve(__dirname, "./docs"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  resolve: {
    fallback: {
      fs: false,
    },
  },
};
