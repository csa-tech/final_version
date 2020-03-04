const app = getApp()

Page({
  data: {
    motto: 'Hello Mira',
    people_num:0,
    notes:"",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show: false
  },
  //事件处理函数


  join: function (e) {
    wx.request({
      url: "http://localhost:3000/create-ride", //这里缺少一个post的URL，无法上传数据
      method: "POST",
      data: {
        user_id: getApp().globalData.userID,
        ride_id: this.data.ride_id,
        num_passenger: this.data.people_num,
        note: this.data.notes,
        
      },
      success(res) {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000,
        })
        wx.switchTab({
          url: '/pages/myRide/myRide',
        })
      }
    })
  },


  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    this.setData({
      ride_id:options.ride_id
    })
    var baseUrl = "http://localhost:3000"
    var user_id = app.globalData.userID
    var ride_id = this.data.ride_id
    var URL = `${baseUrl}/view-ride?user_id=${user_id}&ride_id=${ride_id}`
    var that = this
    wx.request({
      url: URL,
      success: function(res){
        that.setData({
          ride: res.data
        })
      }
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
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onChangeNumPeople(event) {
    this.setData({people_num:event.detail});
  },

  onChangeNotes(event) {
    this.setData({ notes: event.detail });
  }
});