

Page({
  data:{
    decision:{}

  },

  acceptFunc: function (e) {
    console.log("已接受");
    wx.request({
      url: "http://13.56.241.40:3077/ride_acceptted?user_ID=" + String(this.data.decision.user_id),
      //parameters = id
      //method: 'PUT',
      data: {
        
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data[0]);
        wx.navigateTo({
          url: '../myRide/myRide',
        })
      }
    })
    
    
  },

  declineFunc: function (e) {
    console.log("已拒绝");
    
    wx.request({
      url: "http://13.56.241.40:3077/ride_deny?user_ID=" + String(this.data.decision.user_id),
      //parameters = id
      //method: 'PUT',
      data:{
        //status:"declined"
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data[0]);
        wx.navigateTo({
          url: '../myRide/myRide',
        })
      }
    })
  },

  onLoad:function(parameters){
    var that = this;
    console.log(parameters);

    wx.request({
      url: "http://13.56.241.40:3077/ride_list?user_ID="+String(parameters.id),
      //parameters = id
      data:{},
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        console.log(res);
        that.setData({
          decision: res.data[0]
        });
        console.log(that.data.decision);
      }
    })

  }
});