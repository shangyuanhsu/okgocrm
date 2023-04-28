import styles from "../../styles/RewardsRedemption.module.css";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hamburger from "../../components/Hamburger";
import SearchMember from "../../components/SearchMember";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DiamondIcon from '@mui/icons-material/Diamond';
import LanIcon from '@mui/icons-material/Lan';
import { useSelector } from "react-redux";
import { useState } from "react";
import Image from "next/image";

// =========================================
const RewardsRedemption = () => {
  const isHamOpen = useSelector((state) => state.hamburger.value);
  // 搜尋會員
  const [searchMember, setSearchMember] = useState("");
  // 選擇tab
  const handleChangeTab = (tabName) => {

  };
  // 篩選會員
  function takeSearchMember(memberId) {
    setSearchMember(memberId);
    console.log(memberId);
  };
  const [data, setData] = useState(1);
  const handleChange = (event) => {
    setData(event.target.value);
  };
  return (
    <>
      <Head>
        <title>okgo | rewards redemption</title>
        <meta name="description" content="okgo crm" />
        <meta name="author" content="shangyuan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="allSection">
        <div className={isHamOpen ? "ham" : ""}>
          <Header />
          <Footer />
        </div>
        <main>
          <Hamburger />
          <h2>Rewards Redemption</h2>
          <section className="myTabBox">
            <div
              className="myTab myTabChecked"
              onClick={() => {
                handleChangeTab("allRewards");
              }}
            >
              All Rewards
            </div>
            |
            <div
              className="myTab"
              onClick={() => {
                handleChangeTab("discountPrivileges");
              }}
            >
              Discount & Privileges
            </div>
          </section>
          <section>
            <div className={styles.allRewards}>
              <div>
                <SearchMember takeSearchMember={takeSearchMember} />
                <div className={styles.memberShow}>
                  <p><b>Member : </b> Sara Hsu</p>
                  <p><b>Potin : </b>2000</p>
                  <p><b>Phone : </b>+886 9827361515</p>
                  <p><b>Email : </b>okgoSara@gmail.com</p>
                </div>
                <div className={styles.item}>
                  {/* <p>Please Select</p> */}

                  <div>
                    <div>
                      <span><HighlightOffIcon className={styles.cancel} /></span>
                      <span>1</span>
                    </div>
                    <div>
                      <span>Product ID</span>
                      <span>RR20200319120701</span>
                    </div>
                    <div>
                      <span>Product Name</span>
                      <span>okgo product A</span>
                    </div>
                    <div>
                      <span>Quantity</span>
                      <span><input type="number" defaultValue={1} min={0} /></span>
                    </div>
                    <div>
                      <span>Points</span>
                      <span>250</span>
                    </div>
                    <div>
                      <span>ToTal</span>
                      <span>250</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span ><HighlightOffIcon className={styles.cancel} /></span>
                      <span>2</span>
                    </div>
                    <div>
                      <span>Product ID</span>
                      <span>RR20200319120701</span>
                    </div>
                    <div>
                      <span>Product Name</span>
                      <span>okgo product A</span>
                    </div>
                    <div>
                      <span>Quantity</span>
                      <span><input type="number" defaultValue={1} min={0} /></span>
                    </div>
                    <div>
                      <span>Points</span>
                      <span>250</span>
                    </div>
                    <div>
                      <span>ToTal</span>
                      <span>250</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span><HighlightOffIcon className={styles.cancel} /></span>
                      <span>3</span>
                    </div>
                    <div>
                      <span>Product ID</span>
                      <span>RR20200319120701</span>
                    </div>
                    <div>
                      <span>Product Name</span>
                      <span>okgo product A</span>
                    </div>
                    <div>
                      <span>Quantity</span>
                      <span><input type="number" defaultValue={1} min={0} /></span>
                    </div>
                    <div>
                      <span>Points</span>
                      <span>250</span>
                    </div>
                    <div>
                      <span>ToTal</span>
                      <span>250</span>
                    </div>
                  </div>

                </div>

                <div className="myButtonBox">
                  <button
                    className="myButton"
                  >
                    Delete All
                  </button>
                  <button
                    className="myButton myButtonAlert"
                  >
                    Confirm
                  </button>

                </div>
              </div>

              <div>
                <FormControl fullWidth>
                  <Select
                    value={data}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>option 1</MenuItem>
                    <MenuItem value={2}>option 2</MenuItem>
                    <MenuItem value={3}>option 3</MenuItem>
                  </Select>
                </FormControl>

                <div className={styles.productOption}>
                  <div className={`${styles.all} ${styles.checked}`}>All</div>
                  <div className={`${styles.available} `}>Available</div>
                  <div className={``}>Cannot Redeem</div>
                </div>

                <div className={styles.productShow}>
                  <div className={`${styles.productAvailable} ${styles.productAvailableSelected}`}>
                    <Image className={styles.productImg} src="https://picsum.photos/100/100?random=68" alt="productA"
                      width={100}
                      height={100} />
                    <div className={styles.productTitle}>RR20200319120701</div>
                    <div className={styles.productPoint}>
                      <span><DiamondIcon fontSize="small" /></span>
                      <span>100</span>
                      <span><LanIcon fontSize="small" /></span>
                      <span>1</span>
                    </div>
                  </div>
                  <div className={styles.productAvailable}>
                    <Image className={styles.productImg} src="https://picsum.photos/100/100?random=998" alt="productA"
                      width={100}
                      height={100} />
                    <div className={styles.productTitle}>RR20200319120701</div>
                    <div className={styles.productPoint}>
                      <span><DiamondIcon fontSize="small" /></span>
                      <span>100</span>
                      <span><LanIcon fontSize="small" /></span>
                      <span>1</span>
                    </div>
                  </div>
                  <div className={styles.productAvailable}>
                    <Image className={styles.productImg} src="https://picsum.photos/100/100?random=1" alt="productA"
                      width={100}
                      height={100} />
                    <div className={styles.productTitle}>RR20200319120701</div>
                    <div className={styles.productPoint}>
                      <span><DiamondIcon fontSize="small" /></span>
                      <span>100</span>
                      <span><LanIcon fontSize="small" /></span>
                      <span>1</span>
                    </div>
                  </div>
                  <div>
                    <Image className={styles.productImg} src="https://picsum.photos/100/100?random=371" alt="productA"
                      width={100}
                      height={100} />
                    <div className={styles.productTitle}>RR20200319120701</div>
                    <div className={styles.productPoint}>
                      <span><DiamondIcon fontSize="small" /></span>
                      <span>100</span>
                      <span><LanIcon fontSize="small" /></span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </main>

      </div>
    </>
  );
};
export default RewardsRedemption;
