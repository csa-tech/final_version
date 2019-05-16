 // pages/myRide/myRide.js
var app = getApp()
console.log(app)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(app.globalData.userID)
    wx.request({
      // url: "http://13.56.241.40:3077/ride_list? +user_ID" + app.globalData.userID ,
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