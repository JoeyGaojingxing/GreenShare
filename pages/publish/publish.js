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

    markers: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success () {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.getLocation({
                type: 'wgs84',
                altitude: true,
                success (res) {
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
                fail () {
                  console.log("faile")
                },
                complete () {
                  console.log("complete")
                },
               })
            }
          })
        }
      }
    })
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
        console.log("faile")
      },
      complete () {
      },
    })
  },
})