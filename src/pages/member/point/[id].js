import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const getServerSideProps = (context) => {
  const { id } = context.query;
  const memberContent = {
    id: "ty8854",
    firstName: "Sherry",
    lastName: "Hsu",
    totalPoint: 2000,
    accumulatedPointsToday: 0,
  };
  if (id != memberContent.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: { memberData: memberContent },
  };
};

const MemberCardPiont = ({ memberData }) => {
  const router = useRouter();
  // 此會員的原始資料
  const [OGmemberData, setOGmemberData] = useState(
    JSON.parse(JSON.stringify(memberData))
  );
  // 顯示會員資料
  const [member, setMember] = useState({ ...OGmemberData });
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
        <div>
          <Header />
          <Footer />
        </div>
        <main>
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
              Basic personal info
            </div>
            |
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
                  value={member.accumulatedPointsToday}
                />
              </div>
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
                  <b>Total Point</b>
                </p>
                <input
                  className={`myInput myInputReadonly`}
                  readOnly
                  type="text"
                  value={member.totalPoint}
                />
              </div>
            </div>
          </section>
          <section>
            <div className="formBlock ">
              <div>
                <p>
                  <b>Total Point</b>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default MemberCardPiont;
