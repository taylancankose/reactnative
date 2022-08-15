import React from "react";
import DatePicker from "react-native-modern-datepicker";

function Calendar() {
  return (
    <DatePicker
      current="2020-07-13"
      selected="2020-07-23"
      mode="calendar"
      minuteInterval={30}
      style={{ borderRadius: 10 }}
    />
  );
}

export default Calendar;
