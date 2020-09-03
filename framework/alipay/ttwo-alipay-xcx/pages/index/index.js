import { getGoodsList } from '../../service/index'

Page({
  data: {
    title: "首页",
    type: 6,
    goodsList: [
      {
        name: "商品1",
        price: 100
      },
      {
        name: "商品2",
        price: 200
      },
      {
        name: "商品3",
        price: 300
      },
      {
        name: "商品4",
        price: 400
      }
    ]
  },
  onLoad(query) {
    
  },
  onReady() {
    // 页面加载完成
    getGoodsList({id: "1"}).then(res=>{
      console.log("首页====>",res);
    })
  },
  onShow() {
    // 页面显示
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
