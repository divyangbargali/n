import {View, Text, Image,StyleSheet } from 'react-native';

function NameDetailScreen(){

    return (
        <View >
             <Image style={styles.image} source={require('../assets/image/pic1.jpg')} />
            <Text style={styles.title}>Name Details Screen</Text>
            
            <View style={styles.descriptionDetails}>
                <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>
        </View>
    );
}

export default NameDetailScreen;

const styles= StyleSheet.create({

    image:{
        height:'70%',
        width:'100%',
    },
    title:{
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
    },
    descriptionDetails:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    description:{
        color:'black',
        fontSize:16,
        margin:18,
    }
});