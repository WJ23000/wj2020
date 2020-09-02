export default {
  pages: [
    'pages/index/index',
    'pages/classify/classify',
    'pages/cart/cart',
    'pages/mine/mine',
    'pages/login/login',
    'pages/address/address',
    'pages/order_pay/order_pay'
  ],
  tabBar: {
    list: [{
      'iconPath': 'assets/resource/index.png',
      'selectedIconPath': 'assets/resource/index_active.png',
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      'iconPath': 'assets/resource/classify.png',
      'selectedIconPath': 'assets/resource/classify_active.png',
      pagePath: 'pages/classify/classify',
      text: '分类'
    }, {
      'iconPath': 'assets/resource/cart.png',
      'selectedIconPath': 'assets/resource/cart_active.png',
      pagePath: 'pages/cart/cart',
      text: '购物车'
    }, {
      'iconPath': 'assets/resource/mine.png',
      'selectedIconPath': 'assets/resource/mine_active.png',
      pagePath: 'pages/mine/mine',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#3982f6',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
