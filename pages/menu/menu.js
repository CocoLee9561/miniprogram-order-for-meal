// pages/menu/menu.js
import Toast from '@vant/weapp/toast/toast'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodList: [
      {
        title: '肉酱面套餐',
        desc: '好吃',
        price: '38',
        detail: {}
      },
      {
        title: '肉酱面',
        desc: '好吃',
        price: '30',
        detail: {}
      },
      {
        title: '饺子',
        desc: '好吃',
        price: '30',
        detail: {}
      },
      {
        title: '羊肉面',
        desc: '好吃',
        price: '30',
        detail: {}
      },
      {
        title: '冰粉',
        desc: '好吃',
        price: '30',
        detail: {}
      },
      {
        title: '凉拌黄瓜',
        desc: '好吃',
        price: '30',
        detail: {}
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // Toast('hello world')
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

  }
})