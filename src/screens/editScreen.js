import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    return (
        <View>
            <Text>Edit screen {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default EditScreen;