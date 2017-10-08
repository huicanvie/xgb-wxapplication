// diaryDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photos: '',
    headPhoto: '',
    oprVisible: false,
    addVisible: true
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
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      photos: wx.getStorageSync('photo'),
      headPhoto: wx.getStorageSync('photo')[0]
    })
  },
  bindTapDisplayOpr() {
    this.setData({
      oprVisible: true,
      addVisible: false
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
  
  }
})