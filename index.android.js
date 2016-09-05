/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import YouTube from 'react-native-youtube';
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
      //this.playTheVideo = this.playTheVideo.bind(this);
  }
    
  // playTheVideo(){
  //     console.log('playing', this.state.videoId);
  //     RNYouTubePlayer.play("AIzaSyDcyE8zJGvJJ9ClPLfc_OGW4QYOiAKlmFI",this.state.videoId );
  // }
  
  handlePress() {
      this.setState({ videoId: "pfqNykQgaOs" });
      //this.playTheVideo();
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
        <YouTube
          ref="youtubePlayer"
          apiKey="AIzaSyDcyE8zJGvJJ9ClPLfc_OGW4QYOiAKlmFI"
          videoId="KVZ-P-ZI6W4" // The YouTube video ID
          play={true}           // control playback of video with true/false
          hidden={false}        // control visiblity of the entire view
          playsInline={true}    // control whether the video should play inline
          loop={false}          // control whether the video should loop when ended

          onReady={(e)=>{this.setState({isReady: true})}}
          onChangeState={(e)=>{this.setState({status: e.state})}}
          onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
          onError={(e)=>{this.setState({error: e.error})}}
          onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}

          style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
        />
        
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
