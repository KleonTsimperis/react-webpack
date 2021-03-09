module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }], // From react 17 you don't have import react when you are using simple JSX
    ]
}