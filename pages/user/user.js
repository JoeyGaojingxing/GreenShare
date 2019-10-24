// pages/user/user.js
import user from '../../models/user'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: false,
    records: 333,
    length: 666,
    likes: 999,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const _this = this
    const app = getApp()

    // 设页面登录状态
    _this.setData({
      login: app.globalData.login,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onTapLogin (res) {
    const userInfo = res.detail.userInfo
    // cloudID encryptedData iv rawData signature userInfo

    if (userInfo != undefined) {
      // 获取到了 userInfo，之后获取 code
      wx.login({
        success: res => {
          // 发送 res.code 和 userInfo 进行注册
          user.wechatLogin({
            code: res.code,
            data: userInfo,
            success: res => {
              if (res.data.access_token) {
                // 注册成功
                this.setData({
                  login: true,
                })
                app.globalData.login = true
                app.globalData.access_token = res.data.access_token
              } else {
                // 未注册
              }
            },
            fail: () => {
              console.log('失败')
            }
          })
        }
      })
      const app = getApp()
      app.globalData.login = true
      app.globalData.userInfo = userInfo
    }
  },

  onTapGrid (res) {
    const index = res.detail.index
    console.log(index)

    if (index===3) {
      // 我的发布
      wx.navigateTo({
        url: '/pages/records/records',
        success: function(res) {
          console.log(res, 'success')
        },
        fail: function (res) {
          console.log(res, 'fail')
        }
      })
    } else if (index===4) {
      // 我的关注
      wx.navigateTo({
        url: '/pages/userlist/userlist?mode=follow',
        success: function(res) {
          console.log(res, 'success')
        },
        fail: function (res) {
          console.log(res, 'fail')
        }
      })
    }  else if (index===5) {
      // 我的粉丝
      wx.navigateTo({
        url: '/pages/userlist/userlist?mode=fans',
        success: function(res) {
          console.log(res, 'success')
        },
        fail: function (res) {
          console.log(res, 'fail')
        }
      })
    }  else if (index===8) {
      // 关于我们
      wx.navigateTo({
        url: '/pages/about/about',
        success: function(res) {
          console.log(res, 'success')
        },
        fail: function (res) {
          console.log(res, 'fail')
        }
      })
    }  else {
      // 其他
    }
  },

  getUserInfo() {
    user.getDetail({
      success: res => {
        // 获取用户数据
      }
    })
  }

})