// pages/departure/departure.js
import Toast from '../../dist/toast/toast';



Page({

  /**
   * 页面的初始数据
   */
  data: {
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var today = new Date()
    this.setData({
      year: today.getFullYear(),
      month: (today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1),
      day: today.getDate() < 10 ? '0' + today.getDate() : today.getDate()
    })
    
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
      day: M
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
        url: '../information/information?departure='+ this.data.departure +"&destination="+this.data.destination+ "&date=" + this.data.year + "/"+this.data.month+"/"+this.data.day,
      })
    }else{
      Toast("出发地和目的地不能相同")
    }
  }
})