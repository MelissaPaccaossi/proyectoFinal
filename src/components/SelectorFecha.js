import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';

const SelectorFecha = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <DatePicker
      onSelectedChange={date => setSelectedDate(date)}
    />
  );
};
export default SelectorFecha;