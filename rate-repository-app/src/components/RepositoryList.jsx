import { StyleSheet, FlatList, View } from 'react-native';
// import { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';



const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: 'lightgray',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => { // 10.11

    const { repositories } = useRepositories(); // 10.11 - useRepositories hook

    const repositoryNodes = repositories // get the nodes from the edges array
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
        <FlatList
            data={repositoryNodes} // 10.3 - data is the array of items
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItem item={item} />} // 10.3 - RepositoryItem component renders one item
        />
    );
};




export default RepositoryList;