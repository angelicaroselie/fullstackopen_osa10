// 10.6 - Sign in form

import { Pressable, View, Text, StyleSheet } from 'react-native';

import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';

import * as yup from 'yup'; // 10.9 - yup validation library

const styles = StyleSheet.create({
    signInButton: {
        backgroundColor: 'lightpink',
        padding: 15,
        marginTop: 8,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
    },
    signInText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    }
});


const validationSchema = yup.object().shape({ // 10.9 - validationSchema
    username: yup
        .string()
        .min(3, 'Username must be at least 3 characters long')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Password must be at least 5 characters long')
        .required('Password is required')
});



const SignIn = () => { // 10.8 - SignIn component

    const onSubmit = (values) => { // 10.8 - onSubmit function
        console.log(values);
    };

    return (
        <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) =>
                <View>
                    <FormikTextInput name="username" placeholder="Username" />
                    <FormikTextInput name="password" placeholder="Password" secureTextEntry />
                    <Pressable style={styles.signInButton} onPress={handleSubmit}>
                        <Text style={styles.signInText}>Sign in</Text>
                    </Pressable>
                </View>
            }
        </Formik>
    );
}

export default SignIn;