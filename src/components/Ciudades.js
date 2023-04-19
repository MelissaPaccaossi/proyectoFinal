import React, { useState,useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from '@expo/vector-icons/Entypo';
import Provincias from '../api/Provincias';

const DropdownComponent = () => {

  //obteniendo las provincias
  const getProvincias = async () => {
    const response = await Provincias.get('/provincias');
    setProv(response.data.provincias)
  }

    //obteniendo departamentos de una provincia
  const getDepartamento = async (idProvincia) => {
    const response = await Provincias.get(`/departamentos?provincia=${idProvincia}&campos=id,nombre&max=999`);
    setDepartametnos(response.data.departamentos)
  }

  //cambiar los values
  const [value, setValue] = useState(null);

  const [value2, setValue2] = useState(null);

  //cambiar prov por provincia
  const [prov,setProv] = useState([]);
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
      data={prov}
      search
      maxHeight={300}
      labelField="nombre"
      valueField="id"
      placeholder="Provincia..."
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.id);
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
      value={value2}
      onChange={item => {
        setValue2(item.id);
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
    height: 50,
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