import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput, Te} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
          style={styles.stretch}
          source={{uri:'https://media.istockphoto.com/photos/composition-with-vintage-old-hardback-books-diary-fanned-pages-picture-id515597414?k=6&m=515597414&s=612x612&w=0&h=QBgBQ9Vvjwi8qHd1dRQ_gNUg_NnGZ06tMrl3u9Eckbw='}}/>
          </View>
          
          <View style={{backgroundColor:'aqua',alignItems:'center', height:60, width:380,justifyContent:'center'}}>
            <Text style={{ fontStyle:'italic', fontWeight:'bold', fontSize:25, textAlign:'center'}}> Books are magic ,create your account to access them  </Text></View>
            <View style={{backgroundColor:'aliceblue',alignItems:'center', height:50, width:200,justifyContent:'center', marginLeft:70}}>
            <Text style={{  fontWeight:'bold', fontSize:25}}> signUp Form </Text></View>
            
          
<TextInput placeholder="Username"
style={{  height:40,width:200, marginTop:20, marginLeft:30}}></TextInput>

<TextInput placeholder="Email"
style={{ height:40,width:200, marginTop:20, marginLeft:30}}></TextInput>

<TextInput placeholder="Pssword"
style={{ height:40,width:200, marginTop:20, marginLeft:30}}></TextInput>

<TextInput placeholder="Confirm password"
style={{  height:40,width:200, marginTop:20, marginLeft:30}}></TextInput>

<TouchableOpacity style=
{{ height:30, width:80, backgroundColor:'aqua', marginLeft:140, marginTop:40}}>
  <Text style={{fontWeight:'bold', fontSize:20, marginLeft:5}}>Submit</Text>
</TouchableOpacity>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  stretch:{
    height:200,
    width:400,
  },
});
