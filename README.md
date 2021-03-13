# react-webpack

style-loader VS mini-css-extract-plugin
style-loader will inject the style tag (consider it synchronous, has to be downloaded right at the begninning). The mini-css-extract-plugin will create resources or a final css file (consider it async as it will load when styles are need from that file)
https://maxrozen.com/difference-between-style-loader-mini-css-extract-plugin


===
.browserslistrc: By adding the rules, the css that is spit out is prefixed with vendors prefixes `-webkit-box-orient: vertical;`. With no rules, it will default to spit out a css file, that is equal with the one loaded
Both Babel and PostCss is reading from this list.
NOTE: Using `.browserslistrc` file, causes a bug, that disables the hot reloading. Look the implementation with `let target = "web"` for a workaround
===


===
Up until webpack 4 we would use url loader and file loader. But in webpack 5 we can do a built in way
===

===
`{`
    `test: /\.(png|jpe?g|gif|svg)$/i,`
    `type: "asset/inline"` // asset/resource
`},`
* asset/resource will create a directory: dist/images
  the images directory is created due to:
  `output: {`
        `assetModuleFilename: "images/[hash][ext][query]"`
    `},`
* asset/inline will inline the images in the bundled js file (main.js)
* asset webpack will decide based on the images. E.g. if 2 images are large, and 2 small (8kb default), it will create the image directory for the large files and the other two will be inlined
===