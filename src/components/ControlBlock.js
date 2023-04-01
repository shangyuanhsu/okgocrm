import styles from "../styles/ControlBlock.module.css";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const ControlBlock = (props) => {
  return (
    <>
      <div className={styles.controlBlock}>
        <p>{props.option.title}</p>
        <div className={styles.data}>{props.option.show}</div>
        <div className={styles.directions}>
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
