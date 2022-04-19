import React, {useState} from "react";
import styles from "./SignUp.module.css";
import { Link } from 'react-router-dom';

function Login() {
    const [errMessage, setErrMessage] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const err_message = {
        err_email : "Invalid email, please check again!",
        err_password : "Invalid password, please check again!",
    }

    const db_user = [
        {
            email : "try@gmail.com",
            password : "12345678"
        },
        {
            email : "gabrielusita@gmail.com",
            password : "abc123"
        },
        {
            email : "react@gmail.com",
            password : "2022"
        }
    ]

    const handle_trigger_submit = (e) => {
        e.preventDefault();

        var {iemail, ipassword} = document.forms[0];

        const getDataemail = db_user.find((user) => user.email === iemail.value);

        if (getDataemail) {
            if (getDataemail.password !== ipassword.value) {
                setErrMessage({ name: "ipassword", message: err_message.err_password });
            } else {
                setIsSubmit(true);
            }
        } else {
            setErrMessage({ name: "iemail", message: err_message.err_email });
        }
    }

    const renderErrMessage = (name) => name === errMessage.name && (
      <div className="text-danger">
        <p className="fs-6">{errMessage.message}</p>
      </div>
    );

   const renderView = (
        <div className={styles.container}>
            <form onSubmit={handle_trigger_submit} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                    className={styles.formInput}
                        type="text"
                        name="iemail"
                         />
                    {renderErrMessage("iemail")}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={styles.formInput}
                        type="password" 
                        name="ipassword"
                       />
                    {renderErrMessage("ipassword")}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/signup">Registration</Link>
                    <button type="submit">Login</button>
                    {renderErrMessage("btnsubmit")}
                </div>
            </form>
        </div>
   )

     return (
        <div>
            {isSubmit ? alert('User Successfully Logged In'): renderView}
        </div>
    );
};

export default Login;
