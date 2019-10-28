module.exports = [
    {
        type: 'input',
        name: 'appId',
        message: 'input a appId',
        default: 'com.example.app'
    },
    {
        type: 'input',
        name: 'appName',
        message: 'input a appName',
        default: 'ionic-vue-app'
    },
    {
        type: 'list',
        name: 'template',
        message: 'Please pick a preset',
        choices: [
            {
                name: 'ionic-vue',
                value: 'ionic-vue'
            },
            {
                name: 'ionic-vue-tabs',
                value: 'ionic-vue-tabs'
            },
            {
                name: 'ionic-vue-tabs-vux',
                value: 'ionic-vue-tabs-vux'
            }
        ],
        default: 'None'
    }
]
