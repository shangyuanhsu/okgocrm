import Head from "next/head";
import Hamburger from "../../../components/Hamburger";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";


const PointAdjustment = () => {

    const router = useRouter();
    const isHamOpen = useSelector((state) => state.hamburger.value);
    // 選擇tab
    const handleChangeTab = (tabName) => {
        router.push(`/${tabName}`);
    };

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
                    <h2>Point Adjustment</h2>
                    <section className="myTabBox">
            <div
              className="myTab"
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
              className="myTab myTabChecked"
              onClick={() => {
                handleChangeTab("pointRegistration/pointAdjustment");
              }}
            >
              Point Adjustment
            </div>
          </section>

                </main>
            </div>
        </>
    )
}

export default PointAdjustment;