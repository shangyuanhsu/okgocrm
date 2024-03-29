import styles from "../../styles/Login.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
// =========================================
const Login = () => {
  return (
    <>
      <Head>
        <title>okgo | login</title>
        <meta name="description" content="okgo crm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Login}>
        <div>
          <h3>Log in</h3>
          <form>
            <p>Email</p>
            <input
              type="email"
              placeholder="example@mail.com"
              autoComplete="username"
              required
            />
            <p>
              <span>Password</span>
              <Link href="">forgot password?</Link>
            </p>
            <input
              type="password"
              placeholder="at least 8 characters"
              autoComplete="current-password"
              required
            />
            <div>
              <Link href="/" id="loginBtn" className={styles.aBtn}>
                Log in
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
              <span>log in with Google</span>
            </div>
            <div>
              <Image
                src="/img/apple-logo.png"
                alt="apple logo"
                width={27}
                height={20}
              />
              <span>log in with Apple</span>
            </div>
          </div>
          <div className={styles.anotherBox}>
            <span>Do not have an account?</span>
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
