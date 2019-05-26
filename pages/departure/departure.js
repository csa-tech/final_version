// pages/departure/departure.js
import Toast from '../../dist/toast/toast';

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currentDate: new Date().getTime(),
    minDate : new Date().getTime(),
    maxDate: new Date(2019,9 , 1).getTime(),
    formatter(type, value){
      if(type == "year"){
        return `${value}年`;
      }else if(type == 'month'){
        return `${value}月`;
      }else if(type == "day"){
        return `${value}日`
      }
      return value;
    }, 
 
    columns: ["Santa Barbara", "San Francisco", "Los Angeles", "San Diego", "San Jose"],
    departure: "Santa Barbara",
    destination: "Santa Barbara"
    
  },

  /**
   * app.global.userID callback
   */
  onLoad: function () {
    console.log(this)
    if (app.globalData.userID) {
      this.setData({
        userInfo: app.globalData.userID,
        hasUserID: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userIDCallback = res => {
        this.setData({
          motto: app.globalData.userID,
          userInfo: {},
          hasUserInfo: false,
          canIUse: wx.canIUse('button.open-type.getUserInfo')
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


  onInput(event) {
    
    var date = new Date(event.detail)
    var Y = date.getFullYear()
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    

    this.setData({
      year: Y,
      month: M,
      day: D
    })
    
  },
  onDepartureChange(event) {
    const { picker, value, index } = event.detail;
    this.setData({
      departure: value
    })
  },
  onDestinationChange(event) {
    const { picker, value, index } = event.detail;
    this.setData({
      destination: value
    })
  },
  onClick(){
    
    if(this.data.departure != this.data.destination){
      wx.navigateTo({
        url: '../information/information?departure=' + this.data.departure + "&destination=" + this.data.destination + "&date=" +this.data.month +"/" + this.data.day + "/" + this.data.year ,
      })
    }else{
      Toast("出发地和目的地不能相同")
    }
  }
})