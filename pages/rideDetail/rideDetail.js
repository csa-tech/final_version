const app = getApp()

Page({
  data: {
    motto: 'Hello Mira',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    this.setData({
      ride_id: options.ride_id
    })
    var baseUrl = "http://localhost:3000"
    var ride_id = this.data.ride_id
    var user_id = app.globalData.userID.user_id
    var that = this
    console.log(user_id)
    var URL = `${baseUrl}/view-ride?ride_id=${ride_id}&user_id=${user_id}`
    console.log(URL)

    wx.request({
      url: URL,
      method: 'GET',
      responseType: 'text',
      success: function(res) {
        that.setData({
          ride: res.data
        })
      },
      fail: function(res) {

      },
      complete: function(res) {},
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  joinRide: function(){
    wx.navigateTo({
      url: '../newApplication/newApplication?ride='+ this.data.ride_id,
    })
  }
})