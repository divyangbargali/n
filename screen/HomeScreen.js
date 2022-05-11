import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList,ImageBackground, Pressable } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({navigation}) {

    const [people, setPeople] = useState([
        { name: 'shaun', key: '1', color:'red', image:'pic1' },
        { name: 'yoshi', key: '2', color:'green', image:'pic2' },
        { name: 'mario', key: '3', color:'yello', image:'pic3' },
        { name: 'luigi', key: '4', color:'blue',image:'pic4' },
        { name: 'devil', key: '5', color:'grey', image:'pic5' },
        { name: 'peach', key: '6', color:'black', image:'pic6' },
        { name: 'toad', key: '7', color:'pink' , image:'pic7'},
        { name: 'bowser', key: '8', color:'white', imagepic:'pic8' },
        { name: 'style', key: '9', color:'cyan', image:'pic9' },
        { name: 'keenly', key: '10', color:'red', image:'pic10' },
    ]);

   

    function pressHandler(item){
        navigation.navigate('NameScreen',{
           
        });
    }

    return (
        <View style={styles.container1}>
            <Text>Hello World 2</Text>
          
            <FlatList numColumns={2}
                data={people} renderItem={({ item }) => (
                  
                    <View style={styles.blockStyle}>
                        <ImageBackground style={styles.imgSize} source={require('../assets/image/pic'+'2'+'.jpg')}>
                        <Pressable onPress={pressHandler}>
                            <View style={styles.textCover}>
                                <Text style={[styles.fontText,{color:item.color}]}>{item.name}{item.key}</Text>
                            </View>
                        </Pressable>
                        </ImageBackground>
                        
                    </View>
                    
                )} onPress={pressHandler} />
             
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#000000',
    },
    blockStyle:{
        height:135,
        width:180,
        backgroundColor:'red',
        marginHorizontal:16,
        marginVertical:8,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    fontText:{
    color:'red',
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:'30%',
},
imgSize:{
    flex:1,
    width:'100%',
},


})