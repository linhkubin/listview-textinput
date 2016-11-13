/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  Image
} from 'react-native';



class tes1 extends Component {

      constructor(props){ // chay trc render

        super(props);
       
        }
      


      componentWillMount(){
      // man hinh trc render
      }
  
      renderScene(route,navigator){
        switch(route.name){
          case "do" : return (<AX  clickMe={()=>{navigator.push({name:"vang"});}}/>);
          case "vang" : return (<BX clickBack={()=>{navigator.pop({name:"do"});}}/>);
        }
      }

      render() {
        return (
          <Navigator 
            initialRoute={{name:"do"}}
            renderScene = {this.renderScene}
          />

        
import React, { Component } from 'react';
import { 
  AppRegistry,
  TextInput,
  View,
  Text,
  ListView,

  } from 'react-native';

class tes1 extends Component {

  constructor(props) {

    super(props);
    this.state = { text: 'linhkubin' };
    this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
  }

  render() {
    return (
      
      <View>    
      <TextInput
        style={{height: 40, borderColor: 'pink', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Text style={{color:"red",fontSize:30}}>{this.state.text}</Text>
   
      <ListView
        dataSource={
            this.ds.cloneWithRows([
                {Test:"test 1",man:"linhngu"},
                {Test:"test 2",man:"linhnguy"},
                {Test:"test 3",man:"linhnguye"},
                {Test:"test 4",man:"linhnguyen"},
              ])
        }
        renderRow = {(rowData)=>{
          return(
              <View >
              <Text style={{fontSize : 40,}} >{rowData.Test}</Text>
              <Text style={{fontSize : 40,}} >{rowData.man}</Text>
              </View>
            )}
        }
      />
      </View>
    );
  }
}


// App registration and rendering


AppRegistry.registerComponent('tes1', () => tes1);

        );
      }

        componentDidMount(){
        // sau render
        }


}
 


    export default class AX extends Component{

      render(){
        return(
        <View style={styles.screenR}>
         <Image  source={require('./image/1.png')}/>

         <Image style = {{ flex :1 }} source={{uri: 'https://i.imgur.com/AM30jJR.jpg?1'}}/>


            <TouchableOpacity onPress= {this.props.clickMe} >
            <Text style = {{ fontSize : 30,}}> doi man hinh </Text>
            </TouchableOpacity>
        </View>
        );
      }
    }

    export  class BX extends Component{

      render(){
        return(
        <View style={styles.screenY} >

            <TouchableOpacity onPress= {this.props.clickBack} >
            <Text style = {{ flex :3,fontSize : 30,}}> doi man hinh </Text>
            </TouchableOpacity>
        </View>
        );
      }
    }



const styles = StyleSheet.create({

  screenR: {
    
    backgroundColor : "red",
    flex: 1,
  },

  screenY: {
    
    backgroundColor : "yellow",
    flex: 1,
  },
});


AppRegistry.registerComponent('tes1', () => tes1);
