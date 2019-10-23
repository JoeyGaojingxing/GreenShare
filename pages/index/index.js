// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: [1, 2, 3],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // TODO
    this.getArticles('Beijing')
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
    const _this = this
    // 获取文章列表
    const object = {
      //TODO(mojerro):
      data: { city },
      success: res => {
        const data = res.data
        const statusCode = res.statusCode
        const header = res.header

        _this.setData({
          articles: data
        })
      },
      fail: () => {}
    }
    wx.request({object})
  },

  onTapLike: function () {
    
  },

  onTapComment: function () {

  },

  onTapShare: function () {
    
  },

  onTapFollow: function () {
    console.log("onTapFollow")
  },

  onTapContent: function () {
    console.log('onTapContent')
    wx.navigateTo({
      url: '/pages/content/content?mode=marker'
    })
  }
})