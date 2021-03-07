# react-webpack

style-loader VS mini-css-extract-plugin
style-loader will inject the style tag (consider it synchronous, has to be downloaded right at the begninning). The mini-css-extract-plugin will create resources or a final css file (consider it async as it will load when styles are need from that file)
https://maxrozen.com/difference-between-style-loader-mini-css-extract-plugin


===
.browserslistrc: By adding the rules, the css that is spit out is prefixed with vendors prefixes `-webkit-box-orient: vertical;`. With no rules, it will default to spit out a css file, that is equal with the one loaded
Both Babel and PostCss is reading from this list.
NOTE: Using `.browserslistrc` file, causes a bug, that disables the hot reloading. Look the implementation with `let target = "web"` for a workaround
===