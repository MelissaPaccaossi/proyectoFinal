import React, { useState } from 'react';
import { Text, Divider, useTheme, Input,Button } from '@rneui/themed';
import { ScrollView, StyleSheet, View,TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import Boton from '../components/Boton'


const DividerView = () => {
const { theme } = useTheme();
return (
  <>
    <ScrollView>
      <Text style={styles.subHeader}>Login AVI</Text>
        <View>
          <TouchableOpacity style={ styles.botonFacebook }>
            <Icon
            name='facebook'
            type='FontAwesome5Brands'
            color='#517fa4'
            size={80}
            marginHorizontal={20}
            />
            <Text style={styles.labelFacebook}>Iniciar Sesion con Facebook</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.horizontal}>
        <Text style={styles.labelAvi}>Inicia Sesion con tu cuenta de AVI</Text>
          <Input
          placeholder='correo@correo.com'
          />
         <Input placeholder="Password" secureTextEntry={true} />
          <Boton
          titulo='Ingresar'
          color="#112a52"
              />
          <Divider width={1} inset={true} insetType="middle" />
            <Text style={styles.textoRegistro}>¿No tienes una cuenta? Regístrate(hacer enlace)</Text>
      </View>
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#2089dc",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
},
horizontal: {
  marginBottom: 10,
},
botonFacebook:{
marginBottom: 20,
marginTop:30,
flexDirection: 'row',
justifyContent: 'center'
},
labelFacebook:{
  fontSize:20,
  marginTop:25,
  marginRight:25
},
labelAvi:{
marginVertical:20,
fontSize:20,
alignSelf:'center',
},
textoRegistro:{
alignSelf:'center',
marginVertical:15,
fontSize:15
}
});

export default DividerView;