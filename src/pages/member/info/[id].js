import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import RadioButtons from "../../../components/RadioButtons";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Hamburger from "../../../components/Hamburger";
import { useSelector } from "react-redux";

export const getServerSideProps = (context) => {
  const { id } = context.query;

  const memberContent = {
    id: "ty8854",
    firstName: "Sherry",
    lastName: "Hsu",
    phoneno: "58987559",
    email: "okgo01@gmail.com",
    address: "9341 Venice Blvd., Culver City, CA 90232",
    status: "0",
    registrationDate: "2023-01-19",
    updatedDate: "2023-01-19 09:10",
    totalPoint: 2000,
    vipCrad: {
      id: "cu98000001",
      level: 1,
      expirationDate: "2027-11-04",
    },
  };
  if (id == 0) {
    return {
      props: {
        memberData: {
          id: "0",
          firstName: "",
          lastName: "",
          phoneno: "",
          email: "",
          address: "",
          status: "0",
          registrationDate: "",
          updatedDate: "",
          totalPoint: 0,
          vipCrad: {
            id: "",
            level: "",
            expirationDate: "",
          },
        },
      },
    };
  }
  if (id != memberContent.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: { memberData: memberContent },
  };
};

const MemberCard = ({ memberData }) => {
  const isHamOpen = useSelector((state) => state.hamburger.value);
  const router = useRouter();
  // 此會員的原始資料
  const [OGmemberData, setOGmemberData] = useState(
    JSON.parse(JSON.stringify(memberData))
  );
  // 顯示會員資料
  const [member, setMember] = useState({ ...OGmemberData });
  // 使否處在可修改的狀態
  const [isEdit, setIsEdit] = useState(member.id == 0 ? true : false);
  // 狀態的選項
  const radioStatus = [
    { key: "0", name: "Open" },
    { key: "1", name: "Close" },
  ];
  // 有tab標籤

  // =========================================
  // 輸入值
  const handlenewTxt = (val, key, key2 = null) => {
    console.log(val, key);
    if (key2) {
      member[key][key2] = val;
    } else {
      member[key] = val;
    }
    setMember({
      ...member,
    });
  };
  // 還原
  const handleResetData = () => {
    setMember({ ...OGmemberData });
  };
  // 改變值
  const handleSaveData = async () => {
    if (member.id == 0) {
      await router.push(`/member/info/ty8854`);
      router.reload();
      return;
    }
    setOGmemberData({ ...member });
    setIsEdit(false);
  };
  // 想要修改值
  const handleEditData = () => {
    setIsEdit(true);
  };
  // 選擇tab
  const handleChangeTab = (tabName) => {
    router.push(`/member/${tabName}/${memberData.id}`);
  };
  return (
    <>
      <Head>
        <title>okgo | member</title>
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
          <h2>
            <Link className="notThisPage" href="/member">
              Member
            </Link>
            <ChevronRightIcon fontSize="small" />
            {OGmemberData.firstName == ""
              ? "Hello, New Friend"
              : `${OGmemberData.firstName} ${OGmemberData.lastName}`}
          </h2>
          <section className="myTabBox">
            {member.id != 0 && (
              <>
                <div
                  className="myTab myTabChecked"
                  onClick={() => {
                    handleChangeTab("info");
                  }}
                >
                  Info
                </div>
                <div
                  className="myTab"
                  onClick={() => {
                    handleChangeTab("point");
                  }}
                >
                  Point
                </div>
              </>
            )}
          </section>

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
                  value={member.firstName}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "firstName")
                  }
                />
              </div>
              <div>
                <p>
                  <b>LastName</b>
                </p>
                <input
                  className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                  readOnly={!isEdit}
                  type="text"
                  value={member.lastName}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "lastName")
                  }
                />
              </div>
              <div>
                <p>
                  <b>Phone no</b>
                </p>
                <input
                  className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                  readOnly={!isEdit}
                  type="text"
                  value={member.phoneno}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "phoneno")
                  }
                />
              </div>
              <div>
                <p>
                  <b>Email</b>
                </p>
                <input
                  className={`myInput ${!isEdit ? "myInputReadonly" : ""}`}
                  readOnly={!isEdit}
                  type="text"
                  value={member.email}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "email")
                  }
                />
              </div>
              <div>
                <p>
                  <b>Address</b>
                </p>

                {isEdit ? (
                  <textarea
                    className="myTextarea"
                    value={member.address}
                    readOnly={!isEdit}
                    onChange={(e) =>
                      isEdit && handlenewTxt(e.target.value, "address")
                    }
                  ></textarea>
                ) : (
                  <p className="myInputReadonly myPReadonly">{member.address}</p>
                )}
              </div>
            </div>

            <div className="formBlock">
              <div>
                <p>
                  <b>Vip Crad ID</b>
                </p>
                <input
                  className={`myInput ${
                    member.id != 0 ? "myInputReadonly" : ""
                  }`}
                  readOnly={member.id == 0 ? false : true}
                  type="text"
                  value={member.vipCrad.id}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "vipCrad", "id")
                  }
                />
              </div>
              <div>
                <p>
                  <b>Vip Crad Level</b>
                </p>
                <input
                  className={`myInput ${
                    member.id != 0 ? "myInputReadonly" : ""
                  }`}
                  readOnly={member.id == 0 ? false : true}
                  type="text"
                  value={member.vipCrad.level}
                  onChange={(e) =>
                    isEdit && handlenewTxt(e.target.value, "vipCrad", "level")
                  }
                />
              </div>

              <div>
                <p>
                  <b>Vip Crad Expiration Date</b>
                </p>
                <input
                  className={`myInput ${
                    member.id != 0 ? "myInputReadonly" : ""
                  }`}
                  readOnly={member.id == 0 ? false : true}
                  type="text"
                  value={member.vipCrad.expirationDate}
                  onChange={(e) =>
                    isEdit &&
                    handlenewTxt(e.target.value, "vipCrad", "expirationDate")
                  }
                />
              </div>
            </div>
            {member.id != 0 && (
              <>
                <div className="formBlock">
                  <div>
                    <p>
                      <b>Updated Date</b>
                    </p>
                    <input
                      className={`myInput myInputReadonly`}
                      readOnly
                      type="text"
                      value={member.updatedDate}
                    />
                  </div>
                  <div>
                    <p>
                      <b>Status</b>
                    </p>
                    <RadioButtons
                      radioTitle="status"
                      radioOption={radioStatus}
                      defaultVal={member.status}
                      isEdit={isEdit}
                      handleChangeStatus={handlenewTxt}
                    />
                  </div>
                </div>
                {isEdit ? (
                  <div className="myButtonBox">
                    <button className="myButton" onClick={handleResetData}>
                      Reset
                    </button>
                    <button
                      className="myButton myButtonAlert"
                      onClick={handleSaveData}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                 <div className="myButtonBox">
                    <button
                      className="myButton myButtonMain"
                      onClick={handleEditData}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </>
            )}
            {member.id == 0 && (
              <>
                <div className="myButtonBox">
                  <button
                    className="myButton myButtonAlert"
                    onClick={handleSaveData}
                  >
                    Save
                  </button>
                </div>
              </>
            )}
          </section>
        </main>
      </div>
    </>
  );
};
export default MemberCard;
