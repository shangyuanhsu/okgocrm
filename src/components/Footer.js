import styles from '../styles/Footer.module.css';
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
const Footer = () => {
  const [location, setLocation] = useState(1);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <footer className={styles.Footer}>
      <FormControl fullWidth>
        <Select
          className={styles.mySelect}
          value={location}
          onChange={handleChange}
        >
          <MenuItem value={1}>location1</MenuItem>
          <MenuItem value={2}>location2</MenuItem>
          <MenuItem value={3}>location3</MenuItem>
        </Select>
      </FormControl>
      <p>Copyright © 2023 OKGO. All rights reserved.</p>
    </footer>
  );
};

export default Footer;