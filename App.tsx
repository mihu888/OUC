import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { OUCWidgetPreviewScreen } from './WidgetPreview'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>App</Text>
        <OUCWidgetPreviewScreen></OUCWidgetPreviewScreen>
      </View>
    )
  }
}