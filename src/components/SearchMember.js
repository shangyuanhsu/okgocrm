import styles from "../styles/SearchMember.module.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";
// =========================================
// 會員編號
const SearchMember = (props) => {
  const [searchMember, setSearchMember] = useState("");
  // =========================================
  // 搜尋會員
  const handleSearchMember = () => {
    props.takeSearchMember(searchMember);
  };
  // =========================================
  return (
    <div className={styles.SearchMember}>
      <div className={styles.SearchInput}>
        <TextField
         label="Search Member ID"
          fullWidth
          id="fullWidth"
          onChange={(event) => {
            setSearchMember(event.target.value);
            if (event.target.value == "") {
              props.takeSearchMember(event.target.value);
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" value={searchMember}>
                <span className="icobBtn">
                  <QrCodeScannerIcon />
                </span>
                <span className="icobBtn" onClick={handleSearchMember}>
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
