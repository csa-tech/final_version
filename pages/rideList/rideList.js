// pages/rideList/rideList.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    departure:'',
    destination:'',
    success:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      departure: options.departure,
      destination: options.destination,
      // date: options.date
    })
    var baseUrl = "http://localhost:3000"
    var departure = this.data.departure
    var destination = this.data.destination
    var URL = `${baseUrl}/view-rides?departure=${departure}&destination=${destination}`
    wx.request({
      // url: "http://13.56.241.40:3033/ridelist?departure="+that.data.departure+"&destination="+that.data.destination+"&date=" + this.data.date, 
      url: URL,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          response: res.data.result
        })
      },
      fail: function (res) {
        that.setData({
          success: false,
          errMsg: "Oops, 无符合条件的搜索结果"
        })
      }
    })
  }
  
})