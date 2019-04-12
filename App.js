/*
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
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
*/


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { Container, Icon, Content, Header, Left, Body, Right, Segment, Button } from 'native-base'

var images = [
  require('/home/digvijay/Desktop/imagepicker/Newimages/1.jpg'),
  
]

var {width,height} = Dimensions.get('window')



export default class Profile extends Component {
  
constructor(props){
  super(props)
  this.state={
    activeIndex:0
  }
}

  segmentClicked =(index) => {
    this.setState({
      activeIndex: index
    })
  }

  renderSectionOne = () => {
    return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                    <Image style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined,

                    }}
                        source={image}>
                    </Image>

                </View>
            )
        })
  }

renderSection = () => {
  if(this.state.activeIndex == 0)
  {
    return(
      <View style={{flexDirection: 'row', flexWrap: 'wrap' }}  >
        {this.renderSectionOne()}
      </View>
    )
  } 
}


  render() {
    return (

      <Container style={{ flex: 1, backgroundColor: '#fff' }} >

        <Header style={{ backgroundColor: '#fff' }}>
          <Left><Icon name="md-person-add" styles={{ paddingLeft: 10 }} ></Icon></Left>




          <Body><Text style={styles.name}>   Digvijayofficial04 </Text></Body>



          <Right><EntypoIcon name='back-in-time' style={{ paddingRight: 10, fontSize: 32 }}></EntypoIcon></Right>
        </Header>

        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image style={{ width: 75, height: 75, borderRadius: 41.7 }}
                  source={require('./Newimages/1.jpg')} />
              </View>
              <View style={{ flex: 3 }}>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text>20</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>151M</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>167</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
                  </View>


                </View>
                <View
                  style={{ flexDirection: 'row' }}>

                  <Button bordered dark
                    style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}><Text>Edit Profile</Text></Button>


                  <Button bordered dark style={{
                    flex: 1,
                    height: 30,
                    marginRight: 10, marginLeft: 5,
                    justifyContent: 'center'
                  }}>
                    <Icon name="settings" style={{ color: 'black' }}></Icon></Button>
               </View>
              </View>
            </View>

            <View style={{ paddingBottom: 10 }}>
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Digvijay official</Text>
                <Text>Researcher| Devloper| Learner</Text>
                <Text>Digk1997@gmail.com</Text>
              </View>
            </View>
          </View>
          <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
            <Button 
            transparent 
            onPress={() => this.segmentClicked(0)}
            active={this.state.activeIndex == 0}  
            >
           <Icon name="ios-home" style= {[this.state.activeIndex == 0 ? {} :{
             color: '#000'
           }]} />
            </Button>
            <Button
            transparent
            onPress={() => this.segmentClicked(1)}
            active={this.state.activeIndex == 1}  
            >
           <Icon name="ios-list" style= {[this.state.activeIndex == 1 ? {} :{
             color: '#000'}]}
              />
            </Button>
            <Button
            transparent
            onPress={() => this.segmentClicked(2)}
            active={this.state.activeIndex == 2} 
            >
           <Icon name="ios-people" style= {[this.state.activeIndex == 2 ? {} :{
             color: '#000'}]} />
            </Button>
            <Button
            transparent
            onPress={() => this.segmentClicked(3)}
            active={this.state.activeIndex == 3} 
            >
           <Icon name="ios-bookmark" style= {[this.state.activeIndex == 3 ? {} :{
             color: '#000'}]} />
            </Button>
            </View>
          
            {this.renderSection()}
          </View>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  name: {

    alignSelf: 'center',
    color: "#000",
    fontWeight: 'bold'
  },
 

});

