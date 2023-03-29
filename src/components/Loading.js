import styles from "../styles/Loading.module.css";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
// =========================================
const Loading = () => {
  const isShow = useSelector((state) => state.allSet.loading);
  return (
    <>
      {isShow && (
        <div className={styles.loading}>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}
    </>
  );
};

export default Loading;
