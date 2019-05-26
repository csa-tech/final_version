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
    num: '',
    userID: app.globalData.userID
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

  onLoad: function (options) {
    // 更新userID数据，使其与global数据相等
    console.log(app.globalData.userID)
    this.setData({
      userID: app.globalData.userID
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
        price:pri,
        userID:app.globalData.userID
      },
      success:function(res){
        console.log(res.data[0]);
        wx.navigateTo({
          url: '../myRide/myRide' // 返回键去index页面
        }
        )
      }

    })
   // wx.navigateTo({
   //   url: '../myRide/myRide' // 返回键去index页面
   // }

   // )

  }

  

})