const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode,
    target,

    module: {
        rules: [
            {
                test: /\.(s[ca]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"] // When it finds a css file it will use css loader to process it and will piped into MiniCssExtractPlugin
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

    plugins: [ new MiniCssExtractPlugin() ],
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