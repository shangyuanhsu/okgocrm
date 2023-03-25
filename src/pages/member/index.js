import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SearchMember from "../../components/SearchMember";
import TableList from "../../components/TableList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pagination from "@mui/material/Pagination";
// =========================================
// api 資料
export const getServerSideProps = () => {
  const memberData = [
    {
      id: "ty8854",
      name: "Sherry",
      phoneno: "58987559",
      email: "okgo01@gmail.com",
      status: "open",
    },
    {
      id: "gd8269",
      name: "Jay",
      phoneno: "22589777",
      email: "okgo01@gmail.com",
      status: "open",
    },
    {
      id: "85eew6",
      name: "Tina",
      phoneno: "58954444",
      email: "okgo01@gmail.com",
      status: "open",
    },
    {
      id: "thrth5",
      name: "Tom",
      phoneno: "966588747",
      email: "okgo01@gmail.com",
      status: "open",
    },
    {
      id: "rty58e",
      name: "Sara",
      phoneno: "6525555",
      email: "okgo01@gmail.com",
      status: "open",
    },
    {
      id: "we888",
      name: "Sharon",
      phoneno: "1231516",
      email: "okgo01@gmail.com",
      status: "open",
    },
    {
      id: "853rrr3",
      name: "Emma",
      phoneno: "88565455",
      email: "okgo01@gmail.com",
      status: "open",
    },
    {
      id: "erg883",
      name: "Judy",
      phoneno: "58955559",
      email: "okgo01@gmail.com",
      status: "open",
    },
    {
      id: "t8he55",
      name: "Amy",
      phoneno: "83265488",
      email: "okgo01@gmail.com",
      status: "open",
    },
    {
      id: "tt5555",
      name: "Ian",
      phoneno: "77732555",
      email: "okgo01@gmail.com",
      status: "open",
    },
  ];

  return {
    props: { memberData },
  };
};
// =========================================
const Member = ({ memberData }) => {
  // =========================================
  // 顯示用的資料
  const [memberDataArray, setMemberDataArray] = useState(memberData);
  // 搜尋會員
  const [searchMember, setSearchMember] = useState("");
  // 目前頁碼
  const [page, setPage] = useState(1);
  // 顯示幾筆資料
  const countLimit = 10;
  // 原資料
  const OGmemberDataArray = JSON.stringify(memberData);
  // =========================================
  // 篩選會員
  const takeSearchMember = (memberId) => {
    setSearchMember(memberId);
    // 沒有搜尋字樣就拿原資料
    if (memberId === "") {
      setMemberDataArray([...JSON.parse(OGmemberDataArray)]);
      return;
    }
    // 跟新資料
    setMemberDataArray(
      memberDataArray.filter((item) => item.id.indexOf(memberId) != -1)
    );
  };
  // 顯示table會員列表
  const showMember = () => {
    const data = memberDataArray.map((element) => {
      return (
        <tr onClick={() => selectMember(element.id)} key={element.id}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.phoneno}</td>
          <td>{element.email}</td>
          <td>{element.status}</td>
        </tr>
      );
    });
    // 沒資料沒結果
    if (data.length === 0) {
      return (
        <tr>
          <td colSpan="5">
            <b>NO RESULT</b>
          </td>
        </tr>
      );
    }
    return data;
  };
  // =========================================
  // 點選頁碼
  const handleChange = (event, value) => {
    setPage(value);
  };
  // 選擇會員
  const selectMember = (memberId) => {
    console.log(memberId);
  };
  // =========================================
  return (
    <>
      <Head>
        <title>okgo | member</title>
        <meta name="description" content="okgo crm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="allSection">
        <div>
          <Header />
          <Footer />
        </div>
        <main>
          <h2>Member</h2>
          <section>
            <SearchMember takeSearchMember={takeSearchMember} />
            <TableList showMember={showMember} />
            {memberDataArray.length > countLimit && (
              <div className="paginationBox">
                <Pagination
                  count={Math.ceil(memberDataArray.length / countLimit)}
                  page={page}
                  onChange={handleChange}
                />
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
};

export default Member;
