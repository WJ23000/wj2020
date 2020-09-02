import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import { getGoodsList } from '../../service/index'
import './index.styl'

export default class Index extends Component<any> {

  state= {
    title: "首页",
    type: true
  }

  // 对应onLoad,页面创建时执行
  componentWillMount () { }

  // 对应onReady,页面首次渲染完毕时执行
  componentDidMount () { 
    getGoodsList({id: "1"}).then(res=>{
      console.log("首页====>",res);
    })
  } 

  // 页面卸载时触发，如 redirectTo 或 navigateBack 到其他页面时
  componentWillUnmount () { }

  // 页面显示/切入前台时触发
  componentDidShow () { }

  // 页面隐藏/切入后台时触发， 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
  componentDidHide () { }

  render () {
    const { title, type } = this.state
    return (
      <View className='index'>
        <View>{title}</View>
        <View className={classnames(type ? 'red': 'blue')}>测试classnames</View>
        {type ? <View>1</View>: <View>2</View>}
        {type && <View>3</View>}
      </View>
    )
  }
}
