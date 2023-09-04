import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native'; // 10.6
import { ScrollView } from 'react-native'; // 10.7


const styles = StyleSheet.create({ // 10.4 - styles for the app bar
    container: {
        backgroundColor: theme.colors.appBarBackground,
        paddingTop: Constants.statusBarHeight,
        marginBottom: 15,
    },
    textstyle: { // 10.4 - styles for the text in app bar
        color: theme.colors.headerFontColor,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold,
    }
});




const AppBar = () => { // 10.4, 10.6, 10.7 - component for the app bar
    return (
        <View style={styles.container}>

            <ScrollView horizontal>

                <Link to="/" component={Pressable}>
                    <Text style={styles.textstyle}>Repositories</Text>
                </Link>

                <Link to="/signin" component={Pressable}>
                    <Text style={styles.textstyle}>Sign in</Text>
                </Link>

            </ScrollView>

        </View>
    );

};

export default AppBar;