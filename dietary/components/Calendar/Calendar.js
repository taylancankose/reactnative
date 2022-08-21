import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { StyleSheet } from "react-native";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <DatePicker
      current="2020-07-13"
      selected="2020-07-23"
      mode="calendar"
      minuteInterval={30}
      style={styles.calendar}
      onSelectedChange={(date) => setSelectedDate(date)}
    />
  );
}

export default Calendar;

const styles = StyleSheet.create({
  calendar: {
    borderRadius: 10,
    width: 300,
    height: 250,
  },
});
