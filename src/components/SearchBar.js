import React from 'react';
import {View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle } />
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText = {onTermChange}
            onEndEditing = { onTermSubmit}
            placeholder='Search'  
            style={styles.inputStyle}
        />
    </View>;
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#CCC',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 8,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;