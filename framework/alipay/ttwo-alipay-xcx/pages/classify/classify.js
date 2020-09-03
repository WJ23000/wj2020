import { getGoodsList } from '../../service/classify'

Page({
  onLoad(query) {
    
  },
  onReady() {
    // 页面加载完成
    // 页面加载完成
    getGoodsList({id: "1"}).then(res=>{
      console.log("分类====>",res);
    })
  },
  onShow() {
    // 页面显示
  },
  onTitle() {
    my.showToast({
      content: '已触发',
      type: 'none'
    });
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
