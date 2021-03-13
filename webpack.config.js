const path = require('path');
const { webpack, DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode,
    target,

    output: {
        path: path.resolve(__dirname, "dist"), // Needed for clean webpack plugin to work
        assetModuleFilename: "images/[hash][ext][query]"
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // A new way in webpack 5 how to handle images instead of file-loader url-loader
                type: "asset", // asset/resource --- asset/inline
            },
            {
                test: /\.(s[ca]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, // The use below was working, this was a workaround, as in the video it was throwing an error, but in the commented method below use: [MiniCssExt...] it worked fine
                        options: { publicPath: "" }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
                //use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"] // When it finds a css file it will use css loader to process it and will piped into MiniCssExtractPlugin
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new DefinePlugin({
            PRODUCTION: process.env.NODE_ENV === "production",
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'typeof window': JSON.stringify('object'),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        })

    ],
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            src: path.resolve(__dirname, 'src/')
        }
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    },

}