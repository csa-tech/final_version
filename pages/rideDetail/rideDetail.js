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
      drivername: options.driverName,
      // cartype: options.carType,
      departure: options.departure,
      // starttime: options.startTime,
      destination: options.destination,
      price: options.price,
      remainseat:parseInt(options.people)-parseInt(options.approved_people),
      rideid:options.rideid
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
  setDisabled: function(){
    wx.navigateTo({
      url: '../newApplication/newApplication?ride='+ this.data.ride_id,
    })
  }
})