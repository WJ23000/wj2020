import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import './order_pay.styl'

export default class OrderPay extends Component<any> {

  config = {
    navigationBarTitleText: '订单支付'
  }

  state= {
    title: "订单支付"
  }

  // 对应onLoad,页面创建时执行
  componentWillMount () { 
    const {id, type} = Taro.getCurrentInstance().router.params
    console.log("接收的参数",id,type)
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
