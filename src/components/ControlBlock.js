import styles from "../styles/ControlBlock.module.css";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FactCheckIcon from '@mui/icons-material/FactCheck';

const ControlBlock = (props) => {
  const icon = () => {
    switch (props.option.icon) {
      case "MonetizationOnIcon": {
        return (<MonetizationOnIcon />)
      }
      case "PeopleAltIcon": {
        return (<PeopleAltIcon />)
      }
      case "FactCheckIcon": {
        return (<FactCheckIcon />)
      }
    }


  }
  return (
    <>
      <div className={styles.controlBlock}>
        <p>{icon()}<span>{props.option.title}</span></p>
        <div className={styles.data}>{props.option.show}</div>
        <div className={`${styles.directions} ${props.option.isUp ? styles.green : styles.red}`}>
          <div>
            {props.option.isUp ? (
              <span>
                <TrendingUpIcon />
                {props.option.percent}
              </span>
            ) : (
              <span>
                <TrendingDownIcon />
                {props.option.percent}
              </span>
            )}
          </div>

          <div>
            <span>{props.option.directions}&nbsp;&nbsp;this week</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ControlBlock;
