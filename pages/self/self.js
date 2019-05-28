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
    contact: app.globalData.contact
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
        var newpath = res.tempFilePaths[0];
        console.log(newpath);
        
        // wx.request({
        //   url: 'http://13.56.241.40:3014',
        // })

        // console.log(res.tempFiles[0]);
        // wx.uploadFile({
        //   url: 'http://13.56.241.40:3014/Personal?user_ID=' + String(app.globalData.user_id),
        //   header: { 'content-type': 'multipart/form-data' },
        //   filePath: newpath[0],
        //   name: '' + String(app.globalData.user_id),
        //   formData: {},
        //   success(res){

        //   }
        // })
        $.setData({ UserImgUrl: newpath })
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
  contactInput:function (e){
    var $ = this;
    $.setData({
      contact: e.detail.value
    })
    app.globalData.contact = $.data.contact;
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
    app.globalData.contact = $.data.contact
    app.globalData.UserImgUrl = $.data.UserImgUrl 
    app.globalData.name = $.data.name
    wx.request({
      url: "http://13.56.241.40:3014/Personal?user_ID=" + 6,//String(app.globalData.user_id),
      method: 'post',
      data: {
        name: app.globalData.name,
        contact: app.globalData.contact,
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