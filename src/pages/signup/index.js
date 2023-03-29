import styles from "../../styles/Login.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
// =========================================
const Signup = () => {
  return (
    <>
      <Head>
        <title>okgo | sign up</title>
        <meta name="description" content="okgo crm" />
        <meta name="author" content="shangyuan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Signup}>
        <div>
          <h3>Sign up</h3>
          <form>
            <p>First name</p>
            <input
              type="text"
              autoComplete="username"
              placeholder="your first name"
              required
            />
            <p>Last name</p>
            <input
              type="text"
              autoComplete="username"
              placeholder="your last name"
              required
            />

            <p>Email</p>
            <input
              type="email"
              placeholder="example@mail.com"
              autoComplete="username"
              required
            />
            <p>
              <span>Password</span>
            </p>
            <input
              type="password"
              placeholder="at least 8 characters"
              autoComplete="current-password"
              required
            />
            <div>
              <Link href="/" id="loginBtn" className={styles.aBtn}>
                Sign up
              </Link>
            </div>
          </form>
          <div className={styles.anotherChoice}>
            <p>
              <span></span>
              <span>Or</span>
              <span></span>
            </p>
            <div>
              <Image
                src="/img/google-logo.png"
                alt="google logo"
                width={27}
                height={20}
              />
              <span>Sign up with Google</span>
            </div>
            <div>
              <Image
                src="/img/apple-logo.png"
                alt="apple logo"
                width={27}
                height={20}
              />
              <span>Sign up with Apple</span>
            </div>
          </div>
          <div className={styles.anotherBox}>
            <span>Already have an account?</span>
            <Link href="/login">Log in</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
