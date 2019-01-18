/**
 *Created For:
 *Author:wangdong
 *Date:2019/1/18
 */
const CleanPlugin = require("clean-webpack-plugin");
module.exports = {
    devServer:{
        port: process.env.VUE_APP_PORT,
    },
    productionSourceMap: process.env.NODE_ENV !=="production",
    chainWebpack: config=>{
        config.plugin('clean')
            .use(CleanPlugin, [['dist'], { root: '/dir' }]);
    },
    configureWebpack:{
        plugins:[

        ]
    }
}