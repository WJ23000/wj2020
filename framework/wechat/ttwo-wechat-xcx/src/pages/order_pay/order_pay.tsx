import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import './order_pay.styl'

export default class OrderPay extends Component<any> {

  state= {
    title: "订单支付"
  }

  // 对应onLoad,页面创建时执行
  componentWillMount () { 
    const {id, title} = Taro.getCurrentInstance().router.params
    Taro.setNavigationBarTitle({
      title: title
    });
    console.log("接收的参数",id,title)
  }

  componentDidMount () { 
    
  }

  render () {
    return (
      <View className='index'>
        <View>订单支付</View>
      </View>
    )
  }
}
