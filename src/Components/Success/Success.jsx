import React from "react";
import styles from "./Success.module.css";
import succesLogo from "../../assets/images/icon-success.svg";

const Success = ({ handleDismiss, inputMail }) => {
  return (
    <div className={styles.containerSuccess}>
      <div className={styles.success}>
        <div className={styles.successContent}>
          <div>
            <img src={succesLogo} />
          </div>
          <div>
            <h1>Thanks for subscribing!</h1>
          </div>
          <div>
            <p>
              A confirmation email has been sent to{" "}
              <span className={styles.pSpan}>{inputMail}</span> Please open it
              and click the button inside to confirm your subscription.
            </p>
          </div>
          <div>
            <button
              onClick={handleDismiss}
              type="button"
              className={styles.buttonDismiss}
            >
              Dismiss message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
