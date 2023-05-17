import styles from "../../styles/pointRegistration.module.css"
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hamburger from "../../components/Hamburger";
import SearchMember from "../../components/SearchMember";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/zh-cn";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Image from "next/image";

// =========================================
const PointRegistration = () => {
  const router = useRouter();
  const isHamOpen = useSelector((state) => state.hamburger.value);
  // 選擇tab
  const handleChangeTab = (tabName) => {
    router.push(`/${tabName}`);
  };
  // 搜尋會員
  const [searchMember, setSearchMember] = useState("");
  // 篩選會員
  function takeSearchMember(memberId) {
    setSearchMember(memberId);
  }
  return (
    <>
      <Head>
        <title>okgo | point registration</title>
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
          <h2>PointRegistration</h2>
          <section className="myTabBox">
            <div
              className="myTab myTabChecked"
              onClick={() => {
                handleChangeTab("pointRegistration");
              }}
            >
              Points Registration
            </div>
            
            <div
              className="myTab"
              onClick={() => {
                handleChangeTab("pointRegistration/history");
              }}
            >
              History
            </div>
            
            <div
              className="myTab"
              onClick={() => {
                handleChangeTab("pointRegistration/approval");
              }}
            >
              Approval
            </div>
            
            <div
              className="myTab"
              onClick={() => {
                handleChangeTab("pointRegistration/pointAdjustment");
              }}
            >
              Point Adjustment
            </div>
          </section>
          <section>
            <div>
              <SearchMember takeSearchMember={takeSearchMember} />
            </div>
            <div className="memberShow">
              {/* <p className="tipChoose">Please Search Member</p> */}
              <p><b>Member : </b>Sara Hsu</p>
              <p><b>Phone : </b>+886 9827361515</p>
              <p><b>Email : </b>okgoSara@gmail.com</p>
            </div>
          </section>
          <section className={styles.receiptDataBox}>
            <div>
              <div>
                <p>
                  <b>Location</b>
                </p>
                <div className="myFormMargin">
                  <FormControl fullWidth>
                    <Select
                      value={1}
                    >
                      <MenuItem value={1}>location1</MenuItem>
                      <MenuItem value={2}>location2</MenuItem>
                      <MenuItem value={3}>location3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div>
                <p>
                  <b>Amount</b>
                </p>
                <input
                  className={`myInput`}
                  type="text"
                  value={""}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "amount")
                  }
                />
              </div>
              <div>
                <p>
                  <b>Register Date</b>
                </p>
                <div className="myFormMargin">
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="zh-cn"
                  >
                    <DatePicker
                      format="YYYY-MM-DD"
                      sx={[{ width: true }]}
                      value={dayjs("2022-01-13")}
                      // onChange={(newValue) => handleSearchTransactionTime(newValue, 1)}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div>
                <p>
                  <b>Payment Method</b>
                </p>
                <div className="myFormMargin">
                  <FormControl fullWidth>
                    <Select
                      value={1}
                    >
                      <MenuItem value={1}>Credit Cards</MenuItem>
                      <MenuItem value={2}>Cash</MenuItem>

                    </Select>
                  </FormControl>
                </div>
              </div>
              <div>
                <p>
                  <b>Tenant Code</b>
                </p>
                <div className="myFormMargin">
                  <FormControl fullWidth>
                    <Select
                      value={1}
                    >
                      <MenuItem value={1}>CU-001</MenuItem>
                      <MenuItem value={2}>CU-002</MenuItem>
                      <MenuItem value={3}>CU-003</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div>
                <p>
                  <b>Business Unit</b>
                </p>
                <input
                  className={`myInput`}
                  type="text"
                  value={""}
                  // onChange={(e) =>
                  //   isEdit && handlenewTxt(e.target.value, "businessUnit")
                  // }
                />
              </div>
              <div>
                <p>
                  <b>Receipt ID</b>
                </p>
                <input
                  className={`myInput`}
                  type="text"
                  value={""}
                  // onChange={(e) =>
                  //   isEdit && handlenewTxt(e.target.value, "receiptID")
                  // }
                />
              </div>
            </div>
            <div>
              <div className={styles.receiptImgBox}>
                <div className={styles.receiptImg}>
                  <span>no picture</span>
                </div>
              </div>
              <button className={styles.receiptUploadBtn}>upload</button>
            </div>
          </section>
          <section>
            <div className="myButtonBox">

              <button
                className="myButton myButtonAlert"
              // onClick={handleSaveData}
              >
                Submit
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default PointRegistration;
