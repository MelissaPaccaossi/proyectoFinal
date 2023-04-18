import React, { useContext } from 'react';
import { Text, Divider, useTheme, Input,Button } from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';



const DividerView = () => {
const { theme } = useTheme();
return (
  <>
    <ScrollView>
      <Text style={styles.subHeader}>Ingresar a AVI</Text>
      <View style={styles.horizontal}>
          <Input
          placeholder='correo@correo.com'
          />
        <Divider />
        <Input placeholder="Password" secureTextEntry={true} />
        <Divider />
        <Button
              title={'Ingresar'}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
                
              }}
            />
        <Divider width={5} color={theme?.colors?.primary} />
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
horizontalText: {
  textAlign: 'center',
  fontSize: 16,
  marginVertical: 10,
},
vertical: {
  marginBottom: 10,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
},
});

export default DividerView;