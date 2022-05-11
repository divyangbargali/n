import { StyleSheet, Text, View, Pressable,Image  } from "react-native";

export default function NameScreen({navigation}){
     

     function NameDetail(){
        navigation.navigate('NameDetailsScreen');
     }
   
    return (

        <View>
            <Pressable onPress={NameDetail}>
              <Image  style={styles.image} source={require('../assets/image/pic1.jpg')} />
            </Pressable>
            <Text style={styles.title}>Meals Name</Text>
            <Text style={styles.subTitle}>Flower Meals</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    containerName:{
        flex:1,
        backgroundColor:'red',
    },
    image:{
        height:'70%',
        width:'100%',
    },
    title:{
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
    },
    subTitle:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
    }
})