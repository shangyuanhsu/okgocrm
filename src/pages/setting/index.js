import styles from "../../styles/Setting.module.css";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hamburger from "../../components/Hamburger";
import { useState } from "react";
import { useSelector } from "react-redux";
// =========================================
// api 資料
const Setting = () => {
  const isHamOpen = useSelector((state) => state.hamburger.value);
  const ogAdminData = useSelector((state) => state.allSet.admin);
  const [adminData, setAdminData] = useState({ ...ogAdminData });
  // 使否處在可修改的狀態
  const [isEdit, setIsEdit] = useState(false);
  // 輸入值
  const handlenewTxt = (val, key) => {
    console.log(val, key);
    adminData[key] = val;
    setAdminData({
      ...adminData,
    });
  };
  console.log(adminData)
  return (
    <>
      <Head>
        <title>okgo | setting</title>
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
          <h2>Setting</h2>
          <h3 className={styles.zoneTitle}>Personal Information</h3>
          <section>
            <div className="formBlock">
              <div>
                <p>
                  <b>FirstName</b>
                </p>
                <input
                  className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                  readOnly={!isEdit}
                  type="text"
                  value={adminData.firstName}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "firstName")
                  }
                /></div>
              <div>
                <p>
                  <b>LastName</b>
                </p>
                <input
                  className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                  readOnly={!isEdit}
                  type="text"
                  value={adminData.lastName}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "lastName")
                  }
                /></div>
              <div>
                <p>
                  <b>Email</b>
                </p>
                <input
                  className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                  readOnly={!isEdit}
                  type="text"
                  value={adminData.email}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "email")
                  }
                />
              </div>
              <div>
                <p>
                  <b>Phone</b>
                </p>
                <input
                  className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                  readOnly={true}
                  type="text"
                  value={adminData.phone}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "phone")
                  }
                /></div>
              <div>
                <p>
                  <b>Location</b>
                </p>
                <input
                  className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                  readOnly={!isEdit}
                  type="text"
                  value={adminData.location}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "location")
                  }
                /></div>
              <div>
                <p>
                  <b>Position</b>
                </p>
                <input
                  className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                  readOnly={!isEdit}
                  type="text"
                  value={adminData.position}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "position")
                  }
                /></div>
            </div>
          </section>

          <h3 className={styles.zoneTitle}>Emergency Contact</h3>
          <section className="formBlockFlex2">
            {adminData.partner.map(element => {
              return (
                <div className="formBlock" key={element.id}>
                  <div>
                    <p>
                      <b>FirstName</b>
                    </p>
                    <input
                      className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                      readOnly={true}
                      type="text"
                      value={element.firstName}
                    /></div>
                  <div>
                    <p>
                      <b>Location</b>
                    </p>
                    <input
                      className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                      readOnly={true}
                      type="text"
                      value={element.location}
                    /></div>
                  <div>
                    <p>
                      <b>Position</b>
                    </p>
                    <input
                      className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                      readOnly={true}
                      type="text"
                      value={element.position}
                    /></div>
                  <div>
                    <p>
                      <b>Phone</b>
                    </p>
                    <input
                      className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                      readOnly={true}
                      type="text"
                      value={element.phone}
                    /></div>
                </div>
              )
            })}

          </section>
        </main>
      </div >
    </>
  );
};
export default Setting;
