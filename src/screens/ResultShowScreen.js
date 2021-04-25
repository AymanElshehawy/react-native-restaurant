import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';


const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        console.log(response.data);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result){
        return null;
    }

    return (
        <View>
            <Text> {result.name} </Text>
            <FlatList 
                data={result.photos}
                keyExtractor = { photo => photo}
                renderItem = {({item}) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        margin: 5

    }
});

export default ResultShowScreen;