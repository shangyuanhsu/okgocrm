import styles from "../../styles/MemberCard.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Head from 'next/head';
// import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const getServerSideProps = (context) => {
    const { id } = context.query;
    const memberContent = {
        id: "ty8854",
        firstName: "Sherry",
        lastName: "Hsu",
        phoneno: "58987559",
        email: "okgo01@gmail.com",
        status: "open",
        point: 2000,
        vipCrad: {
            id: "cu98000001",
            level: 1,
            date: "2023-01-19"
        }
    };
    return {
        props: { memberData: memberContent }
    }
}


const MemberCard = ({ memberData }) => {
    const [member, setMember] = useState({
        id: "ty8854",
        firstName: "Sherry",
        lastName: "Hsu",
        phoneno: "58987559",
        email: "okgo01@gmail.com",
        status: "open",
        point: 2000,
        vipCrad: {
            id: "cu98000001",
            level: 1,
            date: "2023-01-19"
        }
    });
    const handlenewTxt = (val, key) => {
        console.log(val, key)
        console.log(val, key)
        member[key] = val;
        setMember(
            {
                ...member,
                [key]:val
            }
        )

    }
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
                    <h2> <Link className="notThisPage" href="/member">Member</Link>
                        <ChevronRightIcon fontSize="small" />{member.firstName}&nbsp;{member.lastName}</h2>
                    <section>
                        <input className="myInput"  type="text" value={member.firstName} onChange={(e) => handlenewTxt(e.target.value, "firstName")} />
                        <input className="myInput" type="text" value={member.lastName} onChange={(e) => handlenewTxt(e.target.value, "lastName")} />
                        <input className="myInput" type="text" value={member.phoneno} onChange={(e) => handlenewTxt(e.target.value, "phoneno")} />
                        <input className="myInput" type="text" value={member.email} onChange={(e) => handlenewTxt(e.target.value, "email")} />
                        <input className="myInput" type="text" value={member.point}  />
                        <input className="myInput" type="text" value={member.vipCrad.id}  />
                        <input className="myInput" type="text" value={member.vipCrad.level}  />
                        <input className="myInput" type="text" value={member.vipCrad.date}  />
                    </section>
                </main>
            </div>
        </>

    );
}
export default MemberCard;