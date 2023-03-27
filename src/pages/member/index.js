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
  // 顯示幾筆資料
  const countLimit = 10;
  // 回傳資料
  const memberData = {
    page: 1,
    allPage: 2,
    data: [
      {
        id: "ty8854",
        firstName: "Sherry",
        lastName: "Hsu",
        phoneno: "58987559",
        email: "okgo01@gmail.com",
        status: "open",
      },
      {
        id: "gd8269",
        firstName: "Jay",
        lastName: "Hsu",
        phoneno: "22589777",
        email: "okgo01@gmail.com",
        status: "open",
      },
      {
        id: "85eew6",
        firstName: "Tina",
        lastName: "Hsu",
        phoneno: "58954444",
        email: "okgo01@gmail.com",
        status: "open",
      },
      {
        id: "thrth5",
        firstName: "Tom",
        lastName: "Hsu",
        phoneno: "966588747",
        email: "okgo01@gmail.com",
        status: "open",
      },
      {
        id: "rty58e",
        firstName: "Sara",
        lastName: "Hsu",
        phoneno: "6525555",
        email: "okgo01@gmail.com",
        status: "open",
      },
      {
        id: "we888",
        firstName: "Sharon",
        lastName: "Hsu",
        phoneno: "1231516",
        email: "okgo01@gmail.com",
        status: "open",
      },
      {
        id: "853rrr3",
        firstName: "Emma",
        lastName: "Hsu",
        phoneno: "88565455",
        email: "okgo01@gmail.com",
        status: "open",
      },
      {
        id: "erg883",
        firstName: "Judy",
        lastName: "Hsu",
        phoneno: "58955559",
        email: "okgo01@gmail.com",
        status: "open",
      },
      {
        id: "t8he55",
        firstName: "Amy",
        lastName: "Hsu",
        phoneno: "83265488",
        email: "okgo01@gmail.com",
        status: "open",
      },
      {
        id: "tt5555",
        firstName: "Ian",
        lastName: "Hsu",
        phoneno: "77732555",
        email: "okgo01@gmail.com",
        status: "open",
      }
    ]

  }
  return {
    props: { memberData },
  };
};
// =========================================
const Member = ({ memberData }) => {
  const router = useRouter()
  // =========================================
  // 顯示用的資料
  const [memberDataArray, setMemberDataArray] = useState(memberData.data);
  // 搜尋會員
  const [searchMember, setSearchMember] = useState("");
  // 目前頁碼
  const [page, setPage] = useState(memberData.page);
  // 原資料
  const OGmemberDataArray = JSON.stringify(memberData.data);
  // 總資料長度
  const allDataLength = memberData.allPage;
  // 篩選會員
  function takeSearchMember(memberId) {
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
  }
  // 顯示table會員列表
  const showMember = () => {
    const data = memberDataArray.map((element) => {
      return (
        <tr onClick={() => handleSelectMember(element.id)} key={element.id}>
          <td>{element.id}</td>
          <td>{element.firstName}</td>
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
  const handleSelectMember = (memberId) => {
    router.push(`/member/info/${memberId}`);
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
            <div>
              <TableList showMember={showMember} />
              {allDataLength > 1 && (
                <div className="paginationBox">
                  <Pagination
                    count={allDataLength}
                    page={page}
                    onChange={handleChange}
                  />
                </div>
              )}</div>

          </section>
        </main>
      </div>
    </>
  );
};

export default Member;
