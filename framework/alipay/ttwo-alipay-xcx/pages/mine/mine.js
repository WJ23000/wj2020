import { getGoodsList } from '../../service/mine'

Page({
  data: {
    type: "mine"
  },
  onLoad(query) {
    
  },
  onReady() {
    // 页面加载完成
    // 页面加载完成
    getGoodsList({id: "1"}).then(res=>{
      console.log("我的====>",res);
    })
  },
  onShow() {
    // 页面显示
  },
  // 子组件触发事件
  onChild(e) {
    console.log("子组件成功触发父组件方法",e);
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
