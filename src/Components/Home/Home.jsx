import React, { useState } from "react";
import styles from "./Home.module.css";
import iconList from "../../assets/images/icon-list.svg";
import SignUpDesktop from "../../assets/images/home-image.png";
import Success from "../Success/Success";

const Home = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [verify, setVerify] = useState(false);
  const [inputMail, setInputMail] = useState("");
  const [error, setError] = useState({ status: false, message: "" });

  const handleInputMail = (e) => {
    setInputMail(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // setVerify(emailRegex.test(inputMail));
    if (emailRegex.test(inputMail)) {
      setVerify(true);
      setError({ status: false, message: "" });
    } else {
      setVerify(false);
      setError({ status: true, message: "Valid email required" });
    }
  };

  const handleDismiss = () => {
    setInputMail("");
    setVerify(false);
    setError({ status: false, message: "" });
  };

  return verify ? (
    <Success inputMail={inputMail} handleDismiss={handleDismiss} />
  ) : (
    <div className={styles.containerHome}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.contentIn}>
            <div className={styles.contentInfo}>
              <div>
                <h1>Stay Updated!</h1>
              </div>
              <div>
                <p>
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
              </div>
            </div>
            <div className={styles.list}>
              <img src={iconList} />
              <p>Product discovery and building what matters</p>
            </div>
            <div className={styles.list}>
              <img src={iconList} />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className={styles.list}>
              <img src={iconList} />
              <p>And much more!</p>
            </div>
            <div className={styles.labelForm}>
              <label htmlFor="email">Email address</label>
              {error.status && (
                <span className={styles.errorText}>{error.message}</span>
              )}
            </div>
            <input
              type="email"
              name="email"
              placeholder="email@company.com"
              value={inputMail}
              onChange={handleInputMail}
              className={error.status ? styles.inputError : ""}
            />

            <button
              onClick={handleRegister}
              className={`${styles.buttonHome} ${
                error.status ? styles.buttonError : ""
              }`}
              type="button"
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className={styles.image}>
          <img src={SignUpDesktop} />
        </div>
      </div>
    </div>
  );
};

export default Home;
