import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./NutritionTable.style";
import { Table, Row, Rows } from "react-native-table-component";

function NutritionTable({ items }) {
  const [tableData, setTableData] = useState([
    ["Sodium Content", (items?.nf_sodium ? items?.nf_sodium : "-") + " dv%"],
    [
      "Calcium Content",
      (items?.nf_calcium_dv ? items?.nf_calcium_dv : "-") + " mg",
    ],
    [
      "Cholesterol Content",
      (items?.nf_cholesterol ? items?.nf_cholesterol : "-") + " mg",
    ],
    [
      "Fiber Content",
      (items?.nf_dietary_fiber ? items?.nf_dietary_fiber : "-") + " g",
    ],
    ["Iron Content", (items?.nf_iron_dv ? items?.nf_iron_dv : "-") + " dv%"],
    [
      "Vitamin A Content",
      (items?.nf_vitamin_a_dv ? items?.nf_vitamin_a_dv : "-") + " dv%",
    ],
    [
      "Vitamin C Content",
      (items?.nf_vitamin_c_dv ? items?.nf_vitamin_c_dv : "-") + " dv%",
    ],
    [
      "Water Content",
      (items?.nf_water_grams ? items?.nf_water_grams : "-") + " g",
    ],
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.table_container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Rows data={tableData} style={styles.rows} />
        </Table>
      </View>
    </View>
  );
}

export default NutritionTable;
