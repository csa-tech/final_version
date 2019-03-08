//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    departure:'',
    destination:'',
    empty:false,
    same:false,
    placeList: [
      { name: "圣塔芭芭拉 Santa Barbara", url: "Santa Barbara", img: "/images/places/SantaBarbara.jpg" },
      { name: "旧金山 San Francisco", url: "San Francisco", img: "/images/places/SanFrancisco.jpg" },
      { name: "洛杉矶 Los Angeles", url: "Los Angeles", img: "/images/places/LosAngeles.jpg" },
      { name: "圣地亚哥 San Diego", url: "San Diego", img: "/images/places/SanDiego.jpg" },
      { name: "圣何塞 San Jose", url: "San Jose", img: "/images/places/SanJose.jpg" }
    ]
  },
  
  onLoad: function (options) {
    this.setData({
      departure:options.departure

    })
    
    
  },
  onSearch: function (e) {
    var that=this
    if(e.detail==null||e.detail==""){//if input for destination is empty, set empty to true
      that.setData({
        empty:true
      })
    }
    else{
      var dest=e.detail.trim();//delete the space in front and after the input
      
      that.setData({
        destination: dest,
        empty:false
    })
      if(dest!=that.data.departure){
        
        wx.navigateTo({
          url: '../information/information?departure='+that.data.departure+'&destination='+dest

        })
      }else{
        that.setData({
          same:true,
          empty:false
        })
      }
    }

    }
})
