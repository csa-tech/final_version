//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    date: '',
    time: '',
    departure: '',
    destination: '',
    price: '',
    num: ''
  },
  //事件处理函数
  date: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  time: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  departure: function (e) {
    this.setData({
      departure: e.detail.value
    })
  },
  destination: function (e) {
    this.setData({
      destination: e.detail.value
    })
  },
  price: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  num: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  complete: function () {
    var people_nu=this.data.num
    var depar=this.data.departure
    var dest=this.data.destination
    var dat=this.data.date
    var tim=this.data.time
    var pri=this.data.price

    wx.request({
      url: 'http://localhost:3000/pushing',
      data:{
        //ride_id:'321',
        approved_people:people_nu,
        wechat_id:'xxx',
        note:'hahahaha',
        status:'pending',
        departure:depar,
        destination:dest,
        people_num:'5',
        date: dat,
        time:tim,
        price:pri


      }

    })
    wx.navigateTo({
      url: '../myRide/myRide' // 返回键去index页面
    }

    )

  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})


