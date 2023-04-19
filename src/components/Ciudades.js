import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from '@expo/vector-icons/Entypo';


const provincia = [
  { label: 'Salta', value: '1' },
  { label: 'Tucuman', value: '2' },
  { label: 'Santiago', value: '3' },  
];
const localidad = [
  { label: 'Rosario', value: '1' },
  { label: 'SAn Miguel', value: '2' },
  { label: 'La banda', value: '3' },  
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

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
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Provincia..."
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
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
      data={localidad}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Localidad..."
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
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