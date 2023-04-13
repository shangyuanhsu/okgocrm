import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BarChart from "../components/BarChart";
import AreaChart from "../components/AreaChart";
import PieChart from "../components/PieChart";
import Hamburger from "../components/Hamburger";
import ControlBlock from "../components/ControlBlock";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// =========================================
const Home = () => {
  const isHamOpen = useSelector((state) => state.hamburger.value);
  const todaySales = {
    icon: "MonetizationOnIcon",
    title: "Today sales",
    show: "$825,1254",
    isUp: true,
    percent: "20%",
    directions: "+18.4K",
  };
  const member = {
    icon: "PeopleAltIcon",
    title: "Members",
    show: "2008",
    isUp: true,
    percent: "10%",
    directions: "+1000",
  };
  const todayOrders = {
    icon: "FactCheckIcon",
    title: "Today orders",
    show: "2,625",
    isUp: false,
    percent: "1%",
    directions: "-5k",
  };

  return (
    <>
      <Head>
        <title>okgo</title>
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
          <h2>Welcome back</h2>

          <section className={styles.homeBox}>
            <p className={styles.dashboardSay}>
              Here is what&apos;s happening with your store today.
            </p>
            <div className={styles.controlBox}>
              <ControlBlock option={todaySales} />
              <ControlBlock option={member} />
              <ControlBlock option={todayOrders} />
            </div>
            <div className={styles.chartBox}>
              <div className={styles.chartBox1}>
                <BarChart />
              </div>
              <div className={styles.chartBox2}>
                <AreaChart />
              </div>
              <div className={styles.chartBox3}>
                <PieChart />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default Home;
