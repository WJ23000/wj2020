import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import { getGoodsList } from '../../service/index'
import './classify.styl'

export default class Classify extends Component<any> {

  config = {
    navigationBarTitleText: '分类'
  }

  state= {
    title: "分类"
  }

  componentWillMount () { }

  componentDidMount () { 
    getGoodsList({id: "1"}).then(res=>{
      console.log("分类====>",res);
    })
  }

  onTitle() {
    Taro.showLoading({
			title: '已触发事件'
		})
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='classify'>
        <View>分类</View>
        <AtButton onClick={this.onTitle.bind(this)} type='primary'>打开</AtButton>
      </View>
    )
  }
}
