//index.js
//获取应用实例
var app = getApp()
var requestUrl = "https://route.showapi.com/255-1";
var curPage = 1;
var isPullDownRefreshing = false;
Page({
  data: {
    userInfo: {},
    items :[
      {
        id:1,
        name: '长沙孕妈帮',
        lists: [
          {
            id:10,
            title: '黑客天才黑客天才黑客天才黑客天才黑客天才黑客天才'
          },
          {
            id: 11,
            title: '黑客天才黑客天才黑客天才黑客天才黑客天才黑客天才'
          }
        ]
      },
      {
        id: 2,
        name: '辣妈帮',
        lists: [
          {
            id: 10,
            title: '又一个辣妈'
          },
          {
            id: 11,
            title: '辣妈养成记'
          }
        ]
      }
    ]
  },

  lower:function(){
    console.log("reach to lower...");
    var that = this;
    this.fetchJoke();
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //this.fetchJoke();


  },
  bindTapTeam () {
     wx.navigateTo({
       url: '../team/team',
     })
  },
  onPullDownRefresh:function(){
    console.log('onPullDownRefresh...');
    curPage = 1;
    isPullDownRefreshing = true;
    this.fetchJoke();
  },

  fetchJoke:function(){
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: requestUrl,
      data: {
        'showapi_appid':app.globalData.appid,
        'showapi_sign':app.globalData.apiKey,
        'page':curPage.toString(),
        'type':app.globalData.tText
      },
      method: 'GET',
      success: function(res){
        // success
        if(curPage == 1)
          that.setData({ jokes:res.data.showapi_res_body.pagebean.contentlist });
        else
          that.setData({ jokes: that.data.jokes.concat(res.data.showapi_res_body.pagebean.contentlist) });

        curPage = curPage + 1;
        wx.hideNavigationBarLoading();
        if(isPullDownRefreshing)
          wx.stopPullDownRefresh();
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }

})

