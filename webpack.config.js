const MiniCssExtractPlugin = require('mini-css-extract-plugin')
let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browerslist";
}

module.exports = {
    mode,
    target,

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"] // When it finds a css file it will use css loader to process it and will piped into MiniCssExtractPlugin
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ],
    },

    plugins: [ new MiniCssExtractPlugin() ],
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    }
}