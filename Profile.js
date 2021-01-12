import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button, TextInput } from 'react-native';

const ProfilePicture = ({ image, updateVisibility }) => {
    return (
        <TouchableOpacity
            style={styles.touchable}
            activeOpacity= {0.6}
            onPress={() => updateVisibility(true)}
        >
            <Image source={image} style={styles.image}></Image>
            
        </TouchableOpacity>
    );
}

const ModalSetName = ({ visible, updateVisibility, updateName}) => {
    var textInput = ""
    console.log("Modal Executed")
    return (
        <Modal visible={visible} transparent>
            <View style={{ 
                backgroundColor: "rgba(1, 1, 1, 0.3)", 
                width: '100%', 
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'}} >
                
                <View style={{ 
                    width: '70%', 
                    //height: , 
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center'}}>
                    <Text style={{ padding: 20, fontSize: 18 }}>Enter your Name</Text>
                    <TextInput 
                        style={{ width: '80%', padding: 10, backgroundColor: '#ddd' }} 
                        placeholder="Enter Name"
                        onChangeText={(text) => textInput = text} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                        <Button title="Cancel" onPress={() => updateVisibility(false)} />   
                        <Button title="Submit" onPress={() => {
                            updateVisibility(false)
                            textInput == "" ? updateName("Guest") : updateName(textInput) 
                            }} />
                    </View>
                </View>

            </View>
        </Modal>
    );
}

export function Profile({ profileImage }) {
    const [profilePic, setProfile] = useState(require('./assets/adaptive-icon.png'))
    const [hasName, setHasName] = useState(false)
    const [name, setName] = useState("Guest")
    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={styles.main}>
            <Text style={textStyles.title}>Hello {name}!</Text>
            <ProfilePicture image={profilePic} updateVisibility={setIsVisible} />
            <ModalSetName 
                visible={isVisible} 
                updateVisibility={setIsVisible} 
                updateName={setName} 
                updateHasName={setHasName} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#663870',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    
    },
    touchable: {
        width: 80,
        height: 80,
        margin: 20,
        alignItems: 'center'
    },
    image: {
        backgroundColor: '#fff',
        width: 80,
        height: 80,
        borderRadius: 80 / 2
    },
});

const textStyles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        padding: 10
    }
})