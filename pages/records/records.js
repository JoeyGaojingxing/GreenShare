import article from "../../models/article"

// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: '',
    records: [1,2,3,4],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const nickname = options.nickname

    this.setData({
      nickname
    })

    this.getRecords(nickname)
    console.log(options, '\nonLoadonLoadonLoadonLoadonLoad\n')
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
  onUnload: function (e) {
    console.log(e, 'adsfasdf')

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

  getRecords(nickname, page = 0) {
    let that = this
    article.getUserArticle({
      nickname,
      page,
      success: res => {
        that.setData({
          records: [...this.records, ...res.data]
        })
      },
      fail: () => {}
    })
  }
})