import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { useForm, Controller } from 'react-hook-form';

type FormData = {
    username: string
    password: string
}


const Auth = () => {
    const {
        control, handleSubmit, formState: { errors }
    } = useForm<FormData>()

    const submitForm = (data: any) => console.log(data)

    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <Controller
                        control={control}
                        name='username'
                        rules={{ required: true }}
                        render={({ field }) => (
                            <TextInput style={{ width: '70%', marginBottom: "10%"}} label="username" value={field.value} onChangeText={field.onChange} onBlur={field.onBlur} />
                        )}
                    >
                    </Controller>

                    <Controller
                        control={control}
                        name='password'
                        rules={{ required: true }}
                        render={({ field }) => (
                            <TextInput  style={{ width: '70%' }} label="password" secureTextEntry value={field.value} onChangeText={field.onChange} onBlur={field.onBlur} />
                        )}
                    >
                    </Controller>

                    <Button style={{
                        width: "50%",
                        marginTop: "10%"
                    }} mode='contained' onPress={handleSubmit(submitForm)}>Submit</Button>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        backgroundColor: "#222831",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
});

export default Auth