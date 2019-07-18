// pages/mytest/mytest.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: app.globalData.name,
    age: app.globalData.age,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData)
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
    console.log("show")
    this.setData({
      name: app.globalData.name,
      age: app.globalData.age
    })
    getApp().watch(this.watchBack1)
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
  //监听的回调方法
  watchBack1: function (v) {
    console.log(v)
    
    console.log(app.globalData)
    this.setData({
      name: v.name,
      age: v.age
    })
  },
  changeClick: function () {
    app.globalData.dataobj={
      name:"晓东",
      age:18
    }
  },
  changeClick1: function () {
    app.globalData.dataobj = {
      name: "铁城",
      age: 24
    }
  },
  load: function () {
    wx.navigateTo({
      url: '/pages/test/test'
    })
  }
})