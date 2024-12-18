import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

const CommunitySection = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Gymit</Text>
      <StatusBar style="auto" />
      <View style={styles.input_container}>
        <Text style={styles.small_text}>Community</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16, 
    },
    small_text: {
      color: '#4C6DEF',
      marginTop: 20,
      alignSelf: 'center'
    },
    txt: {
      color: '#4C6DEF',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 50
    }
  });

  export default CommunitySection;