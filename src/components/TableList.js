import styles from "../styles/TableList.module.css";
import React, { useState } from "react";
// =========================================
const TableList = (props) => {
  return (
    <div className={styles.TableList}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>E-mail</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{props.showMember()}</tbody>
      </table>
    </div>
  );
};

export default TableList;
