// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList.jsx'; // 10.3
import AppBar from './AppBar.jsx'; // 10.3
import { Route, Routes, Navigate } from 'react-router-native';


import SignIn from './SignIn.jsx'; // 10.6

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => { // 10.3, 10.4
    return (
        <View style={styles.container}>
            <AppBar />

            <Routes>
                <Route path="/" element={<RepositoryList />} exact />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>


        </View>
    );
};

export default Main;