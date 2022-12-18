/**
 * @Description: webpack配置
 * @Author: lixianying
 * @Date: 2019-11-26
 */
const path = require("path");
const { PerfseePlugin } = require("@perfsee/webpack");

/**
 * 生成完整路径
 */
function resolve(dir) {
    return path.join(__dirname, dir);
}

console.log("------->   ", !process.env.PERFSEE_NO_UPLOAD);
module.exports = {
    // 关闭保存时eslint检测
    lintOnSave: false,
    devServer: {
        port: 8888,
        open: true,
        overlay: {
            warnings: false,
            errors: true,
        },
        proxy: {
            "/api": {
                target: "http://127.0.0.1:3000/",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": "/",
                },
            },
        },
    },
    // 配置别名
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src"),
            },
        },
        plugins: [
            new PerfseePlugin({
                project: "vue-music",
                artifactName: "main",
                enableAudit: true,
                token: "uddqiniv/+iNUpxlcyBDCL/JOI+3RvBmJao8L0xhEpVY=",
            }),
        ],
    },
    // 配置标题栏图标
    pwa: {
        iconPaths: {
            favicon32: "favicon.ico",
            favicon16: "favicon.ico",
            appleTouchIcon: "favicon.ico",
            maskIcon: "favicon.ico",
            msTileImage: "favicon.ico",
        },
    },
    css: {
        loaderOptions: {
            sass: {
                // 全局变量
                prependData: `
          @import "@/styles/variables.scss";
        `,
            },
            less: {
                javascriptEnabled: true,
            },
        },
    },
};
