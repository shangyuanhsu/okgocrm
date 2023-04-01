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
    title: "Today sales",
    show: "$825,1254",
    isUp: true,
    percent: "20%",
    directions: "+18.4K",
  };
  const member = {
    title: "Members",
    show: "2008",
    isUp: true,
    percent: "10%",
    directions: "+100",
  };
  const todayOrders = {
    title: "Today orders",
    show: "2,625",
    isUp: true,
    percent: "1%",
    directions: "+5K",
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

          <div className={styles.homeBox}>
            <p className={styles.dashboardSay}>
              Here is what's happening with your store today.
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
          </div>
        </main>
      </div>
    </>
  );
};
export default Home;
