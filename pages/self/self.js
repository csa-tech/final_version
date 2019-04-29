// pages/self/self.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   * 存入data lib
   * 
   */
  data: {
    UserImgUrl: app.globalData.UserImgUrl,
    carColor: app.globalData.carColor,
    carImgUrl: app.globalData.carImgUrl,
    carLicense: app.globalData.carLicense,
    carType: app.globalData.carType,
    name: app.globalData.name,
    phoneNum: app.globalData.phoneNum,
    user_id: app.globalData.user_id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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
  setCarPhotoInfo: function(){
    var $ = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed', 'original'],
      sourceType: ['album', 'camera'],
      success: (res) =>{
        console.log('new image');
        var newpath = res.tempFilePaths;
        $.setData({
          carImgUrl: newpath
        })
      } 
    })
  },
  setPhotoInfo: function(){
    var $ = this;
    wx.chooseImage({
      count : 1,
      sizeType : ['compressed', 'original'],
      sourceType : ['album', 'camera'],
      success: function(res) {
        var newpath = res.tempFilePaths;
        $.setData({
          UserImgUrl: newpath
        })
      },
    })
  },
  UserNameInput: function (e) {
    var $ = this;
    $.setData({
      name: e.detail.value
    })
    app.globalData.name = $.data.name;
  },
  phoneNumInput:function (e){
    var $ = this;
    $.setData({
      phoneNum: e.detail.value
    })
    app.globalData.phoneNum = $.data.phoneNum;
  },
  carTypeInput: function (e) {
    var $ = this;
    $.setData({
      carType: e.detail.value
    })
    app.globalData.carType = $.data.carType;
  },
  carLicenseInput: function (e) {
    var $ = this;
    $.setData({
      carLicense: e.detail.value
    })
    app.globalData.carLicense = $.data.carLicense;
  },
  carColorInput: function (e) {
    var $ = this;
    $.setData({
      carColor: e.detail.value
    })
    app.globalData.carColor = $.data.carColor;
  },
  term: function(){
    wx.navigateTo({url: '../term/term'});
  },
  // when finished post data to global data
  finished: function () {
    var $ = this;
    app.globalData.UserImgUrl = $.data.UserImgUrl 
    app.globalData.carImgUrl = $.data.carImgUrl 
    app.globalData.name = $.data.name 
    app.globalData.carType = $.data.carType 
    app.globalData.carLicense = $.data.carLicense 
    app.globalData.carColor = $.data.carColor
    wx.request({
      url: "http://13.56.241.40:3014/Personal?user_ID=" + String(app.globalData.user_id),
      method: 'post',
      data: {
        // UserImgUrl: app.globalData.UserImgUrl,
        // carImgUrl: app.globalData.carImgUrl,
        // name: app.globalData.name,
        // carType: app.globalData.carType,
        // carLicense: app.globalData.carLicense,
        // carColor: app.globalData.carColor
        name: app.globalData.name,
        phoneNum: app.globalData.phoneNum,
        carType: app.globalData.carType,
        carLicense: app.globalData.carLicense,
        carColor: app.globalData.carColor
      },
      success: function (res) {
        if (res.data.status == true) {
          wx.showToast({
            title: 'success',
            icon: 'success',
            duration: 2000
          })
          ID = res.data.data.ID;
          that.globalData.UserID = ID;
        } else {
          wx.showToast({
            title: res.data.toString.name,
            icon: 'warn',
            duration: 2000
          })
        }
      }
    }),
    wx.navigateBack({
      url: '../completeSelf/completeSelf'
    })
  }
});