import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';




const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();    

    const filterResultsBYPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return <>
        <SearchBar 
            term={term} 
            onTermChange={ setTerm }
            onTermSubmit={ () => searchApi(term) }
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null }
        <ScrollView>
            <ResultsList title='Cost Effective' results={filterResultsBYPrice('$')} />
            <ResultsList title = 'Bit Pricier' results={filterResultsBYPrice('$$')} />
            <ResultsList title="Big Spender" results={filterResultsBYPrice('$$$')} />
        </ScrollView>
    </>;
}

const styles = StyleSheet.create({
    // errorMessageStyle: {
    //     color: 'red',
    //     marginHorizontal: 15
    // }
});

export default SearchScreen;