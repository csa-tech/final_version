var API_URL = "";

Page({
  data: {
    notifications:[]
  },

  onLoad:function(){
    var that = this;
    wx.request({
      url: "http://13.56.241.40:3077/ride_list?user_ID=all",
      data:{}, 
      header:{
        'content-type': 'application/json'
      },
      success:function(res){
        
        console.log(res.data); 
        that.setData({
          notifications: res.data
        });

      }
    })
  }
});