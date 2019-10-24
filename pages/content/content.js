// pages/content/content.js
import article from '../../models/article'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "avatar": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLb5faWpF2MUUFXJoBTLp3BnppVYFDFw6WxAdOQRBLAzbTT05meAOlICE4SGOoAQentiaSZtQTqtA/132",
    "nickname": "mojerro",
    "likes": 160,
    "comments": 100,
    "create_time": "2019-10-10 10:00:00",
    "title": "title",
    "image": ["/static/demo.jpg", "/static/demo.jpg"],
    "signature": "个性签名",
    "content": "content",
    "longitude": "116.29845",
    "latitude": "39.95933",
    "altitude": "3",
    "accuracy": "4",
    "horizontal_accuracy": "5",
    "vertical_accuracy": "6"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const article_id = options.article_id

    this.getDetail(aid)
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

  getDetail(aid) {
    const that = this
    article.getDetail({
      aid,
      success: (res) => {
        // TODO: 
        console.log(res)
        that.data = res.data
      },
      fail: () => {}
    })
  }
})