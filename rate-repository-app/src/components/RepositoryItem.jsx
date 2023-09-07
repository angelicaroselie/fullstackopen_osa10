// 10.3
import { View, Image, Button, Alert, StyleSheet } from 'react-native'; // 10.3
import Text from './Text';

const styles = StyleSheet.create({ // 10.5 - styles for repository item
    rowitem: {
        flexDirection: 'row',
        padding: 15,
    },
    columnitem: {
        flexDirection: 'column',
        paddingLeft: 22.5,
        paddingRight: 22.5,
    },
    columnitemvalue: {
        paddingBottom: 5,
        textAlign: "center",
        fontWeight: 'bold'
    },
});


const RepositoryItem = ({ item }) => { // 10.3 - component takes item as props

    const roundValue = (value) => {
        if (value >= 1000) {
            return (value / 1000).toFixed(1) + 'k';
        }
        return value;
    };

    
    // 10.3 - returns the item's data
    return (
        <View>
            <View style={styles.rowitem}>

                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: item.ownerAvatarUrl }}
                />
                <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
                    <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>{item.fullName}</Text>
                    <Text style={{ marginTop: 5 }}>{item.description}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'start-flex', backgroundColor: '#FF63E9', borderRadius: 5}}>
                        <Button
                            title={item.language}
                            onPress={() => Alert.alert('Simple Button pressed')}
                            color={'white'}
                        />
                    </View>

                </View>

            </View>



            <View style={styles.rowitem}>

                <View style={styles.columnitem}>
                    
                    <Text style={styles.columnitemvalue}>{roundValue(item.stargazersCount)}</Text>
                    <Text style={{ textAlign: "center"}}>Stars</Text>
                </View>

                <View style={styles.columnitem}>
                    <Text style={styles.columnitemvalue}>{roundValue(item.forksCount)}</Text>
                    <Text style={{ textAlign: "center"}}>Forks</Text>
                </View>


                <View style={styles.columnitem}>
                    <Text style={styles.columnitemvalue}>{roundValue(item.reviewCount)}</Text>
                    <Text style={{ textAlign: "center"}}>Reviews</Text>
                </View>

                <View style={styles.columnitem}>
                    <Text style={styles.columnitemvalue}>{roundValue(item.ratingAverage)}</Text>
                    <Text style={{ textAlign: "center"}}>Rating</Text>
                </View>

            </View>

        </View>

    );
}


export default RepositoryItem; // 10.3