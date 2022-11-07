// 配置文件
module.exports = {
    // 每日说配置项（必填项）
    NAME: '', //女朋友备注姓名
    NICKNAME: '', //女朋友昵称
    MEMORIAL_DAY: '2022/10/30', //你和女朋友的纪念日
    CITY: '杭州', //女朋友所在城市（城市名称，不要带“市”）
    SENDDATE: '0 0 8 * * *', //定时发送时间 每天8点06分0秒发送，规则见 /schedule/index.js
    TXAPIKEY: 'c258c4f9f79e34fd01ab211cb92545bb', //此处须填写个人申请的天行apikey,请替换成自己的 申请地址https://www.tianapi.com/signup.html?source=474284281

    // 高级功能配置项（非必填项）
    AUTOREPLY: false, //自动聊天功能 默认开启, 关闭设置为: false
    DEFAULTBOT: '0', //设置默认聊天机器人 0 天行机器人 1 图灵机器人 2 天行对接的图灵机器人，需要到天行机器人官网充值（50元/年，每天1000次）
    AUTOREPLYPERSON: ['lzn', '好友2备注', 'mm'], //指定多个好友开启机器人聊天功能   指定好友的备注，最好不要带有特殊字符
    TULINGKEY: '图灵机器人apikey',//图灵机器人apikey,需要自己到图灵机器人官网申请，并且需要认证

    // (自定义) 如果你有 DIY 和基本的编程基础, 可以在这自己定义变量, 用于 js 文件访问, 包括设置简单的定时任务, 例如可以定义 task 数组
    tasks: [{ nick: 'x', alias: 'y', time: '早上', emoji: '🌝', text: '不出意外的话，打工人该醒了', date: '0 0 10 * * *' },
    { nick: 'x', alias: 'y', time: '午饭前', emoji: '🌞', text: '这时候，我可能准备去排队打饭了吧', date: '0 0 12 * * *' },
    { nick: 'x', alias: 'y', time: '晚饭前', emoji: '🌔', text: '哎，可能打工人该吃晚饭了吧', date: '0 0 18 * * *' },
    { nick: 'x', alias: 'y', time: '睡前', emoji: '🌚', text: '早睡早起，方能养生', date: '0 0 23 * * *' }],
}
