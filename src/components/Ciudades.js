import React, { useState,useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from '@expo/vector-icons/Entypo';
import Provincias from '../api/Provincias';

const DropdownComponent = () => {

  //obteniendo las provincias
  const getProvincias = async () => {
    const response = await Provincias.get('/provincias');
    setProvincia(response.data.provincias)
  }

    //obteniendo departamentos de una provincia
  const getDepartamento = async (idProvincia) => {
    const response = await Provincias.get(`/departamentos?provincia=${idProvincia}&campos=id,nombre&max=999`);
    setDepartametnos(response.data.departamentos)
  }
  
  const [valueProvincia, setValueProvincia] = useState(null);
  const [valueDepartamento, setValueDepartamento] = useState(null);
  
  const [provincia,setProvincia] = useState([]);
  const [departamentos,setDepartametnos] = useState([]);
  

  useEffect(() => {
    getProvincias()
    }, [])

  return (
    <View>
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={provincia}
      search
      maxHeight={400}
      labelField="nombre"
      valueField="id"
      placeholder="Provincia..."
      searchPlaceholder="Search..."
      value={valueProvincia}
      onChange={item => {
        setValueProvincia(item.id);
        getDepartamento(item.id);
      }}
      renderLeftIcon={() => (
        <Entypo style={styles.icon} color="black" name="location-pin" size={20} />
      )}
    />
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={departamentos}
      search
      maxHeight={300}
      labelField="nombre"
      valueField="id"
      placeholder="Localidad..."
      searchPlaceholder="Search..."
      value={valueDepartamento}
      onChange={item => {
        setValueDepartamento(item.id);
      }}
      renderLeftIcon={() => (
        <Entypo style={styles.icon} color="black" name="location-pin" size={20} />
      )}
    />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});