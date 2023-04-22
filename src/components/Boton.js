import React from 'react';
import {View,StyleSheet,} from 'react-native';
import {Button } from '@rneui/themed';

const Boton = ({titulo,color}) => {

    return(       

        <View style={styles.buttonsContainer}>
    
        <Button
            title={titulo}
            buttonStyle={{
                backgroundColor: `${color}`,                        
                borderColor: 'white',
                borderRadius: 30,
            }}
            containerStyle={{
                marginVertical: 10,
                width: 200,
                
            }}
            
            titleStyle={{ fontWeight: 'bold' }}
        />           
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
})

export default Boton;