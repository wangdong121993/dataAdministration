/**
 *Created For:
 *Author:wangdong
 *Date:2019/1/18
 */
const CleanPlugin = require("clean-webpack-plugin");
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
    },
    css:{
        loaderOptions:{
            sass:{
                data:`@import "@/css/a.scss";`
            }
        }
    },
    configureWebpack:{
        plugins:[

        ]
    }
}