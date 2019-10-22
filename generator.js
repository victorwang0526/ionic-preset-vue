module.exports = (api, options, rootOptions) => {
    // 安装一些基础公共库
    api.extendPackage({
        dependencies: {
            "@capacitor/android": "^1.2.1",
            "@capacitor/cli": "^1.2.1",
            "@capacitor/core": "^1.2.1",
            "@capacitor/ios": "^1.2.1",
            "ionicons": "^4.6.3",
        },
        devDependencies: {
            "@ionic/vue": "0.0.9",
            "mockjs": "^1.0.1-beta3"
        }
    });

    if (options.template === 'ionic-vue') {
        console.log('choose ionic-vue')
    } else if (options.template === 'ionic-vue-tabs') {
        console.log('choose ionic-vue-tabs')
    }

    // 配置文件
    api.render({
        './capacitor.config.json' : './template/capacitor.config.json',
        './ionic.config.json' : './template/ionic.config.json',
    });

    if (options.template === 'ionic-vue') {
        console.log('choose ionic-vue')
        // 复制并用 ejs 渲染 `./template` 内所有的文件
        api.render('./template/ionic-vue')
    } else if (options.template === 'ionic-vue-tabs') {
        console.log('choose ionic-vue-tabs')
        // 复制并用 ejs 渲染 `./template` 内所有的文件
        // api.render('./template/ionic-vue-tabs')
    }


}
