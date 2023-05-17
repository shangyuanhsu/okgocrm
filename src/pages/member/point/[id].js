import styles from "../../../styles/MemberPoint.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Popup from "../../../components/Popup";
import TableList from "../../../components/TableList";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Pagination from "@mui/material/Pagination";
import Hamburger from "../../../components/Hamburger";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/zh-cn";

export const getServerSideProps = (context) => {
  const { id } = context.query;

  const memberContent = {
    id: "ty8854",
    firstName: "Sherry",
    lastName: "Hsu",
    totalPoint: 2000,
    todayPorintData: {
      accumulatedPointsToday: 10,
      amountToady: 1000,
    },
    pointThisYearDeadlineData: 1200,
    transactionRecords: [
      {
        id: "1",
        time: "2023-01-01",
      },
    ],
  };
  const transactionRecordsArr = [
    {
      id: "11",
      date: "2023-03-28",
      shop: "shopA",
      total: 1000,
      point: 10,
      details: [
        {
          commodity: "commodityA",
          amount: "200",
        },
        {
          commodity: "commodityb",
          amount: "800",
        },
      ],
    },
    {
      id: "12",
      date: "2023-03-06",
      shop: "shopG",
      total: 120,
      point: 0,
      details: [
        {
          commodity: "commodityA",
          amount: "120",
        },
      ],
    },
    {
      id: "13",
      date: "2023-03-06",
      shop: "shopU",
      total: 1200,
      point: 10,
      details: [
        {
          commodity: "commodityA",
          amount: "100",
        },
        {
          commodity: "commodityB",
          amount: "100",
        },

        {
          commodity: "commodityD",
          amount: "100",
        },
        {
          commodity: "commodityD",
          amount: "100",
        },
        {
          commodity: "commodityD",
          amount: "100",
        },
        {
          commodity: "commodityD",
          amount: "100",
        },
        {
          commodity: "commodityD",
          amount: "100",
        },
        {
          commodity: "commodityD",
          amount: "100",
        },
        {
          commodity: "commodityD",
          amount: "100",
        },
        {
          commodity: "commodityG",
          amount: "400",
        },
      ],
    },
    {
      id: "14",
      date: "2023-03-03",
      shop: "shopD",
      total: 2000,
      point: 20,
      details: [
        {
          commodity: "commodityA",
          amount: "2000",
        },
      ],
    },
    {
      id: "15",
      date: "2023-03-03",
      shop: "shopS",
      total: 1200,
      point: 10,
      details: [
        {
          commodity: "commodityA",
          amount: "1200",
        },
      ],
    },
    {
      id: "16",
      date: "2023-03-02",
      shop: "shopU",
      total: 1200,
      point: 10,
      details: [
        {
          commodity: "commodityA",
          amount: "1200",
        },
      ],
    },
    {
      id: "17",
      date: "2023-03-01",
      shop: "shopY",
      total: 1200,
      point: 10,
      details: [
        {
          commodity: "commodityA",
          amount: "100",
        },
      ],
    },
    {
      id: "18",
      date: "2023-02-24",
      shop: "shopQ",
      total: 100,
      point: 0,
      details: [
        {
          commodity: "commodityA",
          amount: "100",
        },
      ],
    },
    {
      id: "19",
      date: "2023-02-23",
      shop: "shopE",
      total: 100,
      point: 0,
      details: [
        {
          commodity: "commodityA",
          amount: "100",
        },
      ],
    },
    {
      id: "20",
      date: "2023-02-22",
      shop: "shopY",
      total: 1000,
      point: 10,
      details: [
        {
          commodity: "commodityA",
          amount: "1000",
        },
      ],
    },
  ];
  if (id != memberContent.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      memberData: memberContent,
      transactionRecordsArr: transactionRecordsArr,
    },
  };
};

const MemberCardPiont = ({ memberData, transactionRecordsArr }) => {
  const isHamOpen = useSelector((state) => state.hamburger.value);
  const router = useRouter();
  // 此會員的原始資料
  const [OGmemberData, setOGmemberData] = useState(
    JSON.parse(JSON.stringify(memberData))
  );
  // 顯示會員資料
  const [member, setMember] = useState({ ...OGmemberData });
  // 交易紀錄時間用
  const totay = new Date();
  const yearTo = totay.getFullYear();
  const monthTo =
    totay.getMonth() < 9 ? "0" + (totay.getMonth() + 1) : totay.getMonth() + 1;
  const dayTo = totay.getDate();

  const dateFrom = new Date(Date.parse(totay) - 90 * 24 * 3600 * 1000);
  const yearFrom = dateFrom.getFullYear();
  const monthFrom =
    dateFrom.getMonth() < 9
      ? "0" + (dateFrom.getMonth() + 1)
      : dateFrom.getMonth() + 1;
  const dayFrom = dateFrom.getDate();

  // 交易紀錄開始的日期
  const [searchTransactionFrom, setSearchTransactionFrom] = useState(
    `${yearFrom}-${monthFrom}-${dayFrom}`
  );
  // 交易紀錄結束的日期
  const [searchTransactionTo, setSearchTransactionTo] = useState(
    `${yearTo}-${monthTo}-${dayTo}`
  );
  // 顯示幾筆資料
  const countLimit = 10;
  // 目前頁碼
  const [page, setPage] = useState(1);
  //
  const [transactionRecordsDataArray, setTransactionRecordsDataArray] =
    useState([...transactionRecordsArr]);
  // 總資料長度
  const [allDataLength, setAllDataLength] = useState(0);
  const tableTitle = () => {
    return (
      <tr>
        <th max-width="100"></th>
        <th>Date</th>
        <th>Shop</th>
        <th>Total</th>
        <th>Point</th>
      </tr>
    );
  };
  const closePopup = () => {
    setTransactionRecordPop({
      ...TransactionRecordPop,
      isShow: false,
    });
  };
  const [TransactionRecordPop, setTransactionRecordPop] = useState({
    isShow: false,
    title: "Transaction Record",
    isContentText: false,
    contentHTML: "",
    button: [
      {
        name: "back",
        eventName: closePopup,
        color: "",
      },
    ],
  });
  const handleShowTransactionRecords = (details) => {
    console.log(details);
    const html = details.map((element, index) => {
      return (
        <div key={index} className={styles.TransactionRecordsPopcontent}>
          <p>{element.commodity}</p>
          <p>$ {element.amount}</p>
        </div>
      );
    });
    setTransactionRecordPop({
      ...TransactionRecordPop,
      isShow: true,
      contentHTML: html,
    });
  };
  const showTransactionRecords = () => {
    const data = transactionRecordsDataArray.map((element, index) => {
      return (
        <tr
          key={element.id}
          onClick={() => {
            handleShowTransactionRecords(element.details);
          }}
        >
          <td>{index + 1}</td>
          <td>{element.date}</td>
          <td>{element.shop}</td>
          <td>{element.total}</td>
          <td>{element.point}</td>
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
  // 點選頁碼
  const handleChange = (event, value) => {
    setPage(value);
  };

  const getNewTransactionRecordsDataArray = () => {
    const arrLength = 12;
    setAllDataLength(arrLength);
    const arr = [
      {
        id: "11",
        date: "2023-03-28",
        shop: "shopA",
        total: 1000,
        point: 10,
        details: [
          {
            commodity: "commodityA",
            amount: "200",
          },
          {
            commodity: "commodityb",
            amount: "800",
          },
        ],
      },
      {
        id: "12",
        date: "2023-03-06",
        shop: "shopG",
        total: 120,
        point: 0,
        details: [
          {
            commodity: "commodityA",
            amount: "120",
          },
        ],
      },
      {
        id: "13",
        date: "2023-03-06",
        shop: "shopU",
        total: 1200,
        point: 10,
        details: [
          {
            commodity: "commodityA",
            amount: "100",
          },
          {
            commodity: "commodityB",
            amount: "100",
          },

          {
            commodity: "commodityD",
            amount: "100",
          },
          {
            commodity: "commodityD",
            amount: "100",
          },
          {
            commodity: "commodityD",
            amount: "100",
          },
          {
            commodity: "commodityD",
            amount: "100",
          },
          {
            commodity: "commodityD",
            amount: "100",
          },
          {
            commodity: "commodityD",
            amount: "100",
          },
          {
            commodity: "commodityD",
            amount: "100",
          },
          {
            commodity: "commodityG",
            amount: "400",
          },
        ],
      },
      {
        id: "14",
        date: "2023-03-03",
        shop: "shopD",
        total: 2000,
        point: 20,
        details: [
          {
            commodity: "commodityA",
            amount: "2000",
          },
        ],
      },
      {
        id: "15",
        date: "2023-03-03",
        shop: "shopS",
        total: 1200,
        point: 10,
        details: [
          {
            commodity: "commodityA",
            amount: "1200",
          },
        ],
      },
      {
        id: "16",
        date: "2023-03-02",
        shop: "shopU",
        total: 1200,
        point: 10,
        details: [
          {
            commodity: "commodityA",
            amount: "1200",
          },
        ],
      },
      {
        id: "17",
        date: "2023-03-01",
        shop: "shopY",
        total: 1200,
        point: 10,
        details: [
          {
            commodity: "commodityA",
            amount: "100",
          },
        ],
      },
      {
        id: "18",
        date: "2023-02-24",
        shop: "shopQ",
        total: 100,
        point: 0,
        details: [
          {
            commodity: "commodityA",
            amount: "100",
          },
        ],
      },
      {
        id: "19",
        date: "2023-02-23",
        shop: "shopE",
        total: 100,
        point: 0,
        details: [
          {
            commodity: "commodityA",
            amount: "100",
          },
        ],
      },
      {
        id: "20",
        date: "2023-02-22",
        shop: "shopY",
        total: 1000,
        point: 10,
        details: [
          {
            commodity: "commodityA",
            amount: "1000",
          },
        ],
      },
    ];
    setTransactionRecordsDataArray(arr);
  };

  // 選擇tab
  const handleChangeTab = (tabName) => {
    router.push(`/member/${tabName}/${memberData.id}`);
  };

  const updateTransactionTime = (key) => {
    const ans =
      Date.parse(searchTransactionTo) - Date.parse(searchTransactionFrom);
    if (ans <= 0) {
      if (key === 0) {
        setSearchTransactionFrom("");
      } else {
        setSearchTransactionTo("");
      }
      return;
    }
    getNewTransactionRecordsDataArray();
  };
  // 交易紀錄選時間
  const handleSearchTransactionTime = (val, key) => {
    key === 0 ? setSearchTransactionFrom(val) : setSearchTransactionTo(val);
    updateTransactionTime(key);
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
            {OGmemberData.firstName}&nbsp;{OGmemberData.lastName}
          </h2>
          <section className="myTabBox">
            <div
              className="myTab"
              onClick={() => {
                handleChangeTab("info");
              }}
            >
              Info
            </div>
            <div
              className="myTab myTabChecked"
              onClick={() => {
                handleChangeTab("point");
              }}
            >
              Point
            </div>
          </section>
          <section className="formBlockFlex2">
            <div className="formBlock ">
              <div>
                <p>
                  <b>Accumulated Points Today</b>
                </p>
                <input
                  className={`myInput myInputReadonly`}
                  readOnly
                  type="text"
                  value={member.todayPorintData.accumulatedPointsToday}
                />
              </div>
              <div>
                <p>
                  <b>Today consumption amount</b>
                </p>
                <input
                  className={`myInput myInputReadonly`}
                  readOnly
                  type="text"
                  value={member.todayPorintData.amountToady}
                />
              </div>
            </div>
            <div className="formBlock">
              <div>
                <p>
                  <b>Total Point</b>
                </p>
                <input
                  className={`myInput myInputReadonly`}
                  readOnly
                  type="text"
                  value={member.totalPoint}
                />
              </div>
              <div>
                <p>
                  <b>Points Expiring This Year</b>
                </p>
                <input
                  className={`myInput myInputReadonly`}
                  readOnly
                  type="text"
                  value={member.pointThisYearDeadlineData}
                />
              </div>
            </div>
          </section>
          <section>
            <div className="formBlock ">
              <div>
                <p>
                  <b>Transaction Records</b>
                </p>
                <div className={styles.transactionRecordsTimeBox}>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="zh-cn"
                  >
                    <DatePicker
                      format="YYYY-MM-DD"
                      sx={{ flexGrow: 1 }}
                      value={dayjs(searchTransactionFrom)}
                      onChange={(newValue) => handleSearchTransactionTime(newValue, 0)}
                    />
                  </LocalizationProvider>
                  <span></span>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="zh-cn"
                  >
                    <DatePicker
                      format="YYYY-MM-DD"
                      sx={{ flexGrow: 1 }}
                      value={dayjs(searchTransactionTo)}
                      onChange={(newValue) => handleSearchTransactionTime(newValue, 1)}
                    />
                  </LocalizationProvider>
                </div>
                <div>
                  <TableList
                    tableTitle={tableTitle}
                    showData={showTransactionRecords}
                    hasPointer={true}
                  />
                  {Math.ceil(allDataLength / countLimit) > 1 && (
                    <div className="paginationBox">
                      <Pagination
                        count={Math.ceil(allDataLength / countLimit)}
                        page={page}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Popup data={TransactionRecordPop} />
    </>
  );
};
export default MemberCardPiont;
