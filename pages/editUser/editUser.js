// pages/editUser/editUser.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatar_url: app.globalData.avatar_url,
    carColor: app.globalData.carColor,
    carImgUrl: app.globalData.carImgUrl,
    carLicense: app.globalData.carLicense,
    carType: app.globalData.carType,
    name: app.globalData.name,
    contact: app.globalData.contact,
    user_id: app.globalData.userID
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var $ = this;
    wx.request({
      url: "http://13.56.241.40:3014/Personal?user_ID=" + 202,//String(app.globalData.userID),
      method: 'get',
      success: function (res) {
        console.log(res.data)
        var avatar_url = res.data[0].avatar_url;
        var carColor = res.data[0].carColor;
        var carImgUrl = res.data[0].carImgUrl;
        var carLicense = res.data[0].carLicense;
        var carType = res.data[0].carType;
        var name = res.data[0].name;
        var contact = res.data[0].contact;
        var user_id = res.data[0].user_id;

        app.globalData.avatar_url = avatar_url;
        app.globalData.carColor = carColor;
        app.globalData.carImgUrl = carImgUrl;
        app.globalData.carLicense = carLicense;
        app.globalData.carType = carType;
        app.globalData.name = name;
        app.globalData.contact = contact;
        app.globalData.user_id = user_id;

        $.setData({
          avatar_url: app.globalData.avatar_url,
          carColor: app.globalData.carColor,
          carImgUrl: app.globalData.carImgUrl,
          carLicense: app.globalData.carLicense,
          carType: app.globalData.carType,
          name: app.globalData.name,
          contact: app.globalData.contact,
          user_id: app.globalData.user_id
        })
        
        if (res.data.status == true) {
          wx.showToast({
            title: 'success',
            icon: 'success',
            duration: 2000
          })
          ID = res.data.data.ID;
          app.globalData.UserID = ID;
        } else {
          wx.showToast({
            title: res.data.toString.name,
            icon: 'warn',
            duration: 2000
          })
        }
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

  },
  self: function () {
    wx.navigateTo({ url: '../../pages/user/user' });
  }
})