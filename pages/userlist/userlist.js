// pages/userlist/userlist.js
import user from '../../models/user'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: [{
      "nickname": "mojerro",
      "avatar": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLb5faWpF2MUUFXJoBTLp3BnppVYFDFw6WxAdOQRBLAzbTT05meAOlICE4SGOoAQentiaSZtQTqtA/132",
      "signature": "个性签名",
      "records": 333,
      "images": 666,
      "receivedLikes": 999
    }, {
      "nickname": "mojerro",
      "avatar": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLb5faWpF2MUUFXJoBTLp3BnppVYFDFw6WxAdOQRBLAzbTT05meAOlICE4SGOoAQentiaSZtQTqtA/132",
      "signature": "个性签名",
      "records": 333,
      "images": 666,
      "receivedLikes": 999
    }, {
      "nickname": "mojerro",
      "avatar": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLb5faWpF2MUUFXJoBTLp3BnppVYFDFw6WxAdOQRBLAzbTT05meAOlICE4SGOoAQentiaSZtQTqtA/132",
      "signature": "个性签名",
      "records": 333,
      "images": 666,
      "receivedLikes": 999
    }, ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options.mode 可为 fans or follow
    this.getUserList(options.mode)
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

  getUserList(mode) {
    // TODO: 关注用户 粉丝
    const that = this
    if (mode === 'fans') {
      // 获取用户的粉丝
      user.getFollowers({
        success: res => {
          console.log(res)
        },
        fail: () => {}
      })
    } else {
      // 获取用户的关注
      user.getFollowed({
        success: res => {
          console.log(res)
        },
        fail: () => {}
      })
    }
  }

})