import React, { Component } from 'react';
import {  StyleSheet,  Text,  View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    console.log(selectedStartDate)
    return (
      <View style={styles.container}>
        <CalendarPicker
        selectedDayColor='#7eb4ed'
        onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>

        <Text>
            {startDate[8]}{startDate[9]}/{startDate[0]}{startDate[1]}{startDate[2]}/{startDate[11]}{startDate[12]}{startDate[13]}{startDate[14]}
        </Text>

      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});