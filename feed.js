import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button, TextInput, ScrollView, ActivityIndicator, Alert } from 'react-native';


const createAlert = ({ setLoading }) => {
    Alert.alert("Unable to load!", "There was an error, please try again", 
        [
            {
            text: 'Ok',
            onPress: () => setLoading(false)
            }
    ])
}
  
const ButtonActivityComponent = ({ loading, setLoading }) => {
    return (
        <View style={{ flexDirection: 'row' , justifyContent: 'center', marginTop: 20}}>
        <Button title="Load More" onPress={() => {
            setLoading(true)
            createAlert(setLoading={setLoading})
        }} />
        <ActivityIndicator 
            animating={loading}
            size='large'
            color='#999a99' />
    </View>
    );
    
}

const FeedComponent = ({ title, body }) => {
    return (
        <View>
            <View style={styles.article}>
                <Text style={textStyles.articleTitle}>{title}</Text>
                <Text style={textStyles.paragraph}>{body}</Text>
            </View> 
        </View>
        
    );
}

export function Feed() {
    const feedOne = {
        title: "First Article",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc dolor, facilisis ac porta eget, finibus non massa. Donec quis turpis orci. Integer vel mollis risus. Mauris ut vehicula ex, a vestibulum erat. Curabitur mollis tristique nulla ut elementum. Pellentesque a justo eget nunc lacinia semper. Mauris quis tortor non arcu sagittis tempor a ut augue. Duis justo turpis, ullamcorper vitae lacus vitae, facilisis dapibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat tellus et dignissim malesuada. Sed volutpat at arcu a dignissim."
    };
    const feedTwo = {
        title: "Important Notice",
        body: "Phasellus enim enim, ultrices et felis ut, porta commodo sem. Donec rhoncus porttitor magna et eleifend. Sed eget sapien rhoncus lorem placerat finibus vel sit amet quam. Curabitur finibus dapibus nulla ac porttitor. Sed nec tempor lacus. Integer vestibulum quam urna. Proin suscipit pellentesque turpis a scelerisque. Praesent maximus faucibus lorem eget tincidunt."
    }
    const feedThree = {
        title: "Consider This",
        body: "Proin suscipit urna a nulla pulvinar ornare. Mauris aliquam, nulla id mattis iaculis, ante mauris venenatis enim, ac commodo mi massa eget diam. Aliquam rutrum tristique metus, et sollicitudin est. Vivamus in tortor laoreet massa dignissim sagittis vel in quam. Cras faucibus vehicula arcu id bibendum. Nullam condimentum ligula felis, quis tempus velit aliquet porttitor. Suspendisse potenti. Phasellus nec nisi eleifend, condimentum nulla in, accumsan libero. Curabitur pretium venenatis posuere. Nullam interdum metus quis leo iaculis, ut mattis ipsum faucibus."
    }
    const [isLoading, setIsLoading] = useState(false)
    return (
        <View style={styles.mainContainer}>
            <Text style={textStyles.title}>Today's Highlights</Text>
            <ScrollView style={{ height: '70%' }}>
                <FeedComponent title={feedOne.title} body={feedOne.body} />
                <FeedComponent title={feedTwo.title} body={feedTwo.body} />
                <FeedComponent title={feedThree.title} body={feedThree.body} />
                <ButtonActivityComponent loading={isLoading} setLoading={setIsLoading} />
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    article: {
        width: '92%',
        //height: '100%',
        backgroundColor: '#fce6c0',
        margin: 15,
        padding: 10
    }
})

const textStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10
    },
    articleTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5
    },
    paragraph: {
        padding: 5
    }
})