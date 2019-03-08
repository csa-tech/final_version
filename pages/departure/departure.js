// pages/departure/departure.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty:false,
    placeList:[
      {name:"圣塔芭芭拉 Santa Barbara",url:"Santa Barbara",img:"/images/places/SantaBarbara.jpg"},
      { name: "旧金山 San Francisco", url: "San Francisco",img:"/images/places/SanFrancisco.jpg" },
      { name: "洛杉矶 Los Angeles", url: "Los Angeles", img: "/images/places/LosAngeles.jpg"},
      { name: "圣地亚哥 San Diego", url: "San Diego", img: "/images/places/SanDiego.jpg" },
      { name: " 圣何塞 San Jose", url: "San Jose", img: "/images/places/SanJose.jpg" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    that.setData({
      empty:false
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
  
  onSearch:function(e){
    var that = this;
    var departure=e.detail.trim()
    if((departure!=null)&&(departure!="")){
      that.setData({
        empty:false
      })
      wx.navigateTo({
      url: '../destination/destination?departure='+ departure

      })
    }else{
      
      that.setData({
        empty:true
    })
      
    }
  }

})