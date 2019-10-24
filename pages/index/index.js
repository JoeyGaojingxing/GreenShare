// pages/index/index.js
import article from '../../models/article'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: [{
      "title": "这里是标题",
      "image": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLb5faWpF2MUUFXJoBTLp3BnppVYFDFw6WxAdOQRBLAzbTT05meAOlICE4SGOoAQentiaSZtQTqtA/132",
      "like": 130,
      "comment": 140,
      "date": "2019-1-10",
      "avatar": "/static/demo.jpg",
      "id": 1,
      "nickname": "mojerro"
    },{
      "title": "这里是标题",
      "image": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLb5faWpF2MUUFXJoBTLp3BnppVYFDFw6WxAdOQRBLAzbTT05meAOlICE4SGOoAQentiaSZtQTqtA/132",
      "like": 110,
      "comment": 120,
      "date": "2019-1-10",
      "avatar": "/static/demo.jpg",
      "id": 2,
      "nickname": "mojerro"
    },{
      "title": "这里是标题",
      "image": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLb5faWpF2MUUFXJoBTLp3BnppVYFDFw6WxAdOQRBLAzbTT05meAOlICE4SGOoAQentiaSZtQTqtA/132",
      "like": 150,
      "comment": 160,
      "date": "2019-1-10",
      "avatar": "/static/demo.jpg",
      "id": 3,
      "nickname": "mojerro"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // TODO
    // this.getArticles('Beijing')
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

  getArticles: function (city) {
    const that = this

    article.getArticles({
      city: 'Beijing',
      start: 0,
      success: res => {
        that.setData({
          articles: res.data
        })
      }
    })
  },

  onTapLike: function (aid) {
    
  },

  onTapComment: function (aid) {

  },

  onTapShare: function (aid) {
    console.log(aid, '---------------------------------\n')
  },

  onTapFollow: function (aid) {
    console.log("onTapFollow")
  },

  onTapContent: function (aid) {
    console.log('onTapContent')
    wx.navigateTo({
      url: '/pages/content/content?mode=marker'
    })
  }
})