import Head from "next/head";
import Hamburger from "../../../components/Hamburger";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const DiscountAndPrivileges = () => {

    const router = useRouter();
    const isHamOpen = useSelector((state) => state.hamburger.value);
    const [data, setData] = useState(1);
    const handleChange = (event) => {
      setData(event.target.value);
    };
    // 選擇tab
    const handleChangeTab = (tabName) => {
        router.push(`/${tabName}`);
    };

    return (
        <>
            <Head>
                <title>okgo | rewards redemption</title>
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
                    <h2>Rewards Redemption</h2>
                    <section className="myTabBox">
                        <div
                            className="myTab"
                            onClick={() => {
                                handleChangeTab("rewardsRedemption");
                            }}
                        >
                            All Rewards
                        </div>
                        |
                        <div
                            className="myTab myTabChecked"
                            onClick={() => {
                                handleChangeTab("rewardsRedemption/discountAndPrivileges");
                            }}
                        >
                            Discount & Privileges
                        </div>
                    </section>
                 <section>
                 <FormControl fullWidth>
                  <Select
                    value={data}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>option 1</MenuItem>
                    <MenuItem value={2}>option 2</MenuItem>
                    <MenuItem value={3}>option 3</MenuItem>
                  </Select>
                </FormControl>
                 </section>
                </main>
            </div>
        </>
    )
}

export default DiscountAndPrivileges;