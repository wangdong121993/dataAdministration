/**
 *Created For:
 *Author:wangdong
 *Date:2019/1/18
 */
const CleanPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    devServer:{
        port: process.env.VUE_APP_PORT||8080,
        host: process.env.host||"localhost",
        proxy:{
            '/api':{
                target:"https://h5.yiyao.cc",
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        },
        open: true,   //热启动

    },
    publicPath:"/",
    productionSourceMap: process.env.NODE_ENV !=="production",
    chainWebpack: config=>{
        config.plugin('clean')
            .use(CleanPlugin, [['dist'], { root: '/dir' }]);
        // config.module.rule(/\.scss$/).exclude.add('/\src/css/').end();
        config.when(process.env.NODE_ENV !== 'development', config => {
            config.optimization
                .minimizer([
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            // 移除 console
                            compress: {
                                warnings: false,
                                drop_console: true,
                                drop_debugger: true,
                                pure_funcs: ['console.log']
                            }
                        }
                    })
                ])
        })
    },
    // module: {
    //     rules: [{
    //         test: /\.scss$/,
    //         use: [
    //             // fallback to style-loader in development
    //             process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
    //             "css-loader",
    //             "sass-loader"
    //         ]
    //     }]
    // },

    css:{
        loaderOptions:{
            sass:{
                data:`@import "~@/scss/base.scss";`
            }
        }
    },
    configureWebpack:{
        plugins:[

        ]
    }
}