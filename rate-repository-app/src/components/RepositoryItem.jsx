// 10.3
import { View, Text } from 'react-native'; // 10.3
const RepositoryItem = ({ item }) => { // 10.3 - component takes item as props

    // 10.3 - returns the item's data
    return (
        <View>
            <Text>Full name: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
        </View>
    );
}


export default RepositoryItem; // 10.3