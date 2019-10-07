// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    latitude: "",
    longitude: "",
    altitude: "",
    speed: "",
    accuracy: "",
    verticalAccuracy: "",
    horizontalAccuracy: "",
    showPop: false,
    showPopLogin: false,
    markers: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const _this = this
    const app = getApp()
    if (!app.globalData.login) {
      _this.setData({
        showPopLogin: true,
      })
    }
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            // 用户已经同意小程序使用获取地理位置的功能，后续调用 wx.getLocation & wx.chooseLocation 接口不会弹窗询问
            success () {
              _this.getLocation()
            },
            // 用户没同意小程序权限回调函数
            fail () {
              _this.showMessage()
            },
          })
        } else {
          _this.getLocation()
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const _this = this
    wx.getSetting({
      success(res) {
        console.log("userInfo", res)
        if (res.authSetting['scope.userInfo']) {
          _this.setData({
            showPopLogin: false,
          })
        }

        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            // 用户已经同意小程序使用获取地理位置的功能，后续调用 wx.getLocation & wx.chooseLocation 接口不会弹窗询问
            success () {
              _this.getLocation()
            },
            // 用户没同意小程序权限回调函数
            fail () {
              _this.showMessage()
            },
          })
        }
      }
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

  onChangeImage: function (res) {
    console.log(res)
  },

  onRemoveImage: function (res) {
    console.log(res)
  },

  onTapMap: function (res) {
    const _this = this
    console.log(res)
    wx.chooseLocation({
      success (data) {
        console.log("123", data)
        _this.setData({
          longitude: data.longitude,
          latitude: data.latitude,
          markers: [{
            iconPath: "/static/pin.png",
            id: 1,
            longitude: data.longitude,
            latitude: data.latitude,
            width: 50,
            height: 50,
          }],
        })
        console.log("success", data)
      },
      fail () {
        console.log("fail")
        wx.openSetting({
          success (res) {
            console.log(res.authSetting)
            // res.authSetting = {
            //   "scope.userInfo": true,
            //   "scope.userLocation": true
            // }
          },
          fail () {
            console.log("fail open setting")
          }
        })
      },
      complete () {
      },
    })
  },
  onTapOpen (res) {
    const _this = this
    const userLocation = res.detail.authSetting["scope.userLocation"]
    if (userLocation===true) {
      _this.hideMessage()
      _this.getLocation()
    }
  },
  onTapCancel () {
    const _this = this
    _this.hideMessage()
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  showMessage () {
    const _this = this
    _this.setData({
      showPop: true,
    })
  },
  hideMessage () {
    const _this = this
    _this.setData({
      showPop: false,
    })
  },
  getLocation () {
    const _this = this
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success (res) {
        console.log("success", res)
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          speed: res.speed,
          accuracy: res.accuracy,
          altitude: res.altitude,
          verticalAccuracy: res.verticalAccuracy,
          horizontalAccuracy: res.horizontalAccuracy,
          markers: [{
            iconPath: "/static/pin.png",
            id: 1,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50
          }],
        })
      },
    })
  },

  onTapLogin (res) {
    const _this = this
    const userInfo = res.detail.authSetting["scope.userInfo"]
    if (userInfo===true) {
      console.log(userInfo)
      const app = getApp()
      app.globalData.login = true
      _this.setData({
        showPopLogin: false,
      })
    }
  }


})