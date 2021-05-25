import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { globalStyles } from '../utils/style';

export default function JoinHeader() {
    return (
        <View style={styles.headerContainer}>
            <Text style={globalStyles.headingText}>chatGlint</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: Dimensions.get('window').width,
        height: '100%',
        backgroundColor: '#DBDFEA',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
