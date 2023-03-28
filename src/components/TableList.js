import styles from "../styles/TableList.module.css";
import React, { useState } from "react";
// =========================================
const TableList = (props) => {
  return (
    <div className={styles.TableList}>
      <table>
        <thead>{props.tableTitle()}</thead>
        <tbody className={props.hasPointer ? styles.tablePointer : ""}>
          {props.showData()}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
