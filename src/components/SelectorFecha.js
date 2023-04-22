import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { Text, View, StyleSheet, Modal, TouchableOpacity} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const SelectorFecha = () => {
    const [open,setOpen] = useState(false);

    const handleOnPress = () => {
        setOpen(!open)}

    const [selectedDate, setSelectedDate] = useState('');
    
    

  return (
    <View style={styles.fecha}>
      <TouchableOpacity onPress={handleOnPress} style={styles.touchableFecha}>
              <FontAwesome name="calendar" size={25}/>
              <Text style={styles.textFecha}>{selectedDate}</Text>            
      </TouchableOpacity>      
      
      <Modal
            animationType="slide"
            transparent={true}
            visible={open}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <DatePicker
                  mode='calendar'
                  onDateChange={date => setSelectedDate(date)}
                />
                <TouchableOpacity onPress={handleOnPress}>
                    <Text>Cerrar</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>     
    </View>  
  );
};

const styles = StyleSheet.create({

  fecha: {    
      backgroundColor: '#e1eef7',
      marginBottom:5,
      marginTop: 5,
      marginHorizontal: 15,
      borderRadius:5,
      height: 30,
      flex: 0.5,
      
  },

  touchableFecha: {
    flexDirection: 'row',

},

  textFecha:{
    alignSelf: 'center',
    marginLeft: 10
  },

  container:{
      flex:1,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center"
  },

  centeredView:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      marginTop:22
  },

  modalView:{
      margin:20,
      backgroundColor:"white",
      borderRadius:20,
      width: "90%",
      padding: 35,
      alignItems:"center",
      shadowColor:"#000",
      shadowOffset:{width:0, height:2},
      shadowOpacity:0.25,
      shadowRadius:4,
      elevation:5
  }

})

export default SelectorFecha;