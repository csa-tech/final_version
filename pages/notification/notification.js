const app = getApp()
console.log(app)

Page({
  data: {
    notifications: []
  },

  onLoad: function () {
    var that = this;
    console.log(app.globalData.userID)
    var baseUrl = "http://localhost:3000"
    var user_id = app.globalData.userID
    var URL = `${baseUrl}/view-my-pending-applications?user_id=${user_id}`

    wx.request({
      url: URL,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          notifications: res.data.result
        })
      }
    })
  },

  onChange(event){
    wx.redirectTo({
      url: '../application/application'
    })
  }

})

