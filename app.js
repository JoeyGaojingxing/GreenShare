//app.js
App({
  onLaunch: function (res) {
    const _this = this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 允许获取分享群ID
    wx.showShareMenu({
      withShareTicket: true
    })
    console.log('showShareMenu', res)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("login", res)
      }
    })

  },
  globalData: {
    userInfo: null,
    login: false,
    access_token: null
  }
})