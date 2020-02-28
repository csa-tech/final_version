//app.js
App({
  globalData: {
    UserImgUrl: null,
    carColor: null,
    carImgUrl: null,
    carLicense: null,
    carType: null,
    name: null,
    contact: null,
    userID: 99,
    baseurl: "http://localhost:3000"
  },
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: res => {
        var gd = this.globalData
        console.log(res)
        if (res.code) {
          wx.request({
            url: this.globalData.baseurl + '/login',
            data: res.code,
            method: 'GET',
            success: res => {
              console.log(this)
              this.globalData.userID = res.data.user_id
              // this.gd.ID = res.data
              if (this.userIDCallback) {
                this.userIDCallback(res.data);
              }
            }
          })
        }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  

})

