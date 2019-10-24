//app.js
import user from './models/user'

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

    // 使用小程序自动登录并查看是否已注册
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        user.wechatLogin({
          code: res.code,
          success: (res) => {
            if ( res.data.access_token ) {
              // 已经注册过，自动登录并返回 access_token
              _this.globalData.login = true
              _this.globalData.access_token = res.data.access_token
            } else {
              // 未注册
            }
            console.log('成功', res)
          },
          fail: () => {
            console.log('失败')
          }
        })
      }
    })

  },
  globalData: {
    userInfo: null,
    login: false,
    access_token: null
  }
})