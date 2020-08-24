// pages/menu/menu.js
import Toast from '@vant/weapp/toast/toast'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    buttonStyle: `
    --button-border-radius: 10px;
    --button-default-color: green;
    `,
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
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
    setTimeout(() => {
      this.setData({
        buttonStyle: `
          --button-border-radius: 2px;
          --button-default-color: pink;
        `,
      });
    }, 2000);
  },
  onClick() {
    Toast('我是提示文案，建议不超过十五字~');
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

  }
})