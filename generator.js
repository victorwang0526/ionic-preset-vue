module.exports = (api, options, rootOptions) => {
    // 安装一些基础公共库
    api.extendPackage({
        dependencies: {
            "@capacitor/android": "^1.2.1",
            "@capacitor/cli": "^1.2.1",
            "@capacitor/core": "^1.2.1",
            "@capacitor/ios": "^1.2.1",
            "@ionic/pwa-elements": "^1.4.1",
            "ionicons": "^4.6.3",
        },
        devDependencies: {
            "@ionic/vue": "0.0.9",
            "mockjs": "^1.0.1-beta3"
        }
    });

    // install vux
    if(options.template === 'ionic-vue-tabs-vux') {
        api.extendPackage({
            dependencies: {
                "vux": "^2.9.4"
            },
            devDependencies: {
                "less": "^3.10.3",
                "less-loader": "^5.0.0",
                "vue-loader": "14.2.2",
                "vux-loader": "^1.2.9",
                "yaml-loader": "^0.5.0"
            }
        });
    }

    // 配置文件
    api.render({
        './capacitor.config.json' : './template/capacitor.config.json',
        './ionic.config.json' : './template/ionic.config.json',
    });

    // 复制并用 ejs 渲染 `./template` 内所有的文件
    api.render('./template/ionic-vue')

    if(options.template === 'ionic-vue-tabs') {
        api.render('./template/ionic-vue-tabs')
    }else if(options.template === 'ionic-vue-tabs-vux') {
        api.render({
            './vue.config.js' : './template/ionic-vue-tabs-vux/vue.config.js',
        });
        api.render('./template/ionic-vue-tabs-vux')
    }
}
