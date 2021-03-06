import { getGoodsList } from '../../service/cart'

Page({
  onLoad(query) {
    
  },
  onReady() {
    // 页面加载完成
    // 页面加载完成
    getGoodsList({id: "1"}).then(res=>{
      console.log("购物车====>",res);
    })
  },
  onShow() {
    // 页面显示
  },
  onOrderPay() { 
    // 跳转到订单支付页
    my.navigateTo({
      url: `/pages/order_pay/order_pay?id=2&title=订单支付`
    })
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
