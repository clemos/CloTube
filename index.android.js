/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RNYouTubePlayer from 'rn-youtube-android';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CloTube extends Component {
    
  constructor() {
      super();
      this.state = {
          videoId: "no video"
      };
      this.handlePress = this.handlePress.bind(this);
      this.playTheVideo = this.playTheVideo.bind(this);
  }
    
  playTheVideo(){
      
      RNYouTubePlayer.play("AIzaSyDcyE8zJGvJJ9ClPLfc_OGW4QYOiAKlmFI",this.state.videoId );
  }
  
  handlePress() {
      this.setState({ videoId: "KawcajJGX-w" });
      this.playTheVideo();
  }
  
  render() {
      var video = this.state.videoId;
    return (
      <View style={styles.container}>
        <Text 
            style={styles.welcome}
            onPress={this.handlePress}
        >
          COUCOU
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Playing {video}
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CloTube', () => CloTube);
