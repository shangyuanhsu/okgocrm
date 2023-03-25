import styles from "../styles/SearchMember.module.css";
import styles2 from '../styles/Home.module.css';
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";

const SearchMember = (props) => {
  const [searchMember, setSearchMember] = useState("");

  const handleSearchMember = () => {
    props.takeSearchMember(searchMember);
  };

  return (
    <div className={styles.SearchMember}>
      <div className={styles.SearchTitle}> Search member : </div>
      <div className={styles.SearchInput}>
        <TextField
          fullWidth
          id="fullWidth"
          onChange={(event) => {
            setSearchMember(event.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" value={searchMember}>
                <span className={styles2.icobBtn}>
                  <QrCodeScannerIcon />
                </span>
                <span className={styles2.icobBtn} onClick={handleSearchMember}>
                  <SearchIcon />
                </span>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default SearchMember;
