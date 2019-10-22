// pages/user/user.js
import article from '../../models/article'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const _this = this
    const app = getApp()
    const res = await article.getArticles()
    console.log(res, 'this is test')
    // 查看是否授权获取userInfo
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          app.globalData.login = true
          _this.setData({
            login: true,
          })
          wx.getUserInfo({
            success: function(res) {
             // TODO
            }
          })
        }
      }
    })
    console.log(app.globalData, ':globalData')
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

  getUserInfo (res) {
    const userInfo = res.detail.userInfo
    // cloudID encryptedData iv rawData signature userInfo
    console.log(res.detail.userInfo)
    console.log(res)
    if (userInfo != undefined) {
      this.setData({
        login: true,
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
  }

})