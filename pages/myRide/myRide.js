 // pages/myRide/myRide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_ID:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var app=getApp()
    console.log(app.globalData.user_ID)
    that.setData({
      user_ID: app.globalData.user_ID
    })
   
    wx.request({
      //url: "http://13.56.241.40:3077/ride_list? +user_ID" + app.globalData.user_ID ,
      url: "http://13.56.241.40:3077/ride_list?user_ID=1",
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          response: res.data
        })
      }
    })
  },

  onChange(event){
    wx.navigateTo({
      url: '../notification/notification'
    })
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})