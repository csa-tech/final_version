// pages/information/information.js
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
    /*var response =[
      { "rideid": "1", "departure": "Santa Barbara", "destination": "Los Angeles", "date": "01/08", "time": "7:00 pm", "people": "4", "approved_people": "2", "driverName": "Hello", "carType": "Nissan", "price": "30"}, 
      { "rideid": "2", "departure": "San Francisco", "destination": "Santa Barbara", "date": "01/07", "time": "8:00 am", "people": "4", "approved_people": "2", "driverName": "He", "carType": "Benz","price": "30" },
      { "rideid": "3", "departure": "Santa Barbara", "destination": "San Diego", "date": "01/10", "time": "6:00 pm",  "people": "4", "approved_people": "2","driverName":"Hell","carType":"Toyota","price":"25" }
      ]*/
    //var response=[]
    that.setData({
      departure: options.departure,
      destination: options.destination,
      //response: response
    })
    wx.request({
      //url: "http://localhost:3000/ridelist?departure="+that.data.departure+"&destination="+that.data.destination, 
      url: "http://localhost:3000/ridelist?departure=SB&destination=LA",
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res) {
        console.log(res.data)
        that.setData({
          response:res.data
        })
      },
      fail:function(res){
          that.setData({
            success:false,
            errMsg:res.errMsg
         })
      }
    })
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