import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import { validate } from './validate';
import styles from "./SignUp.module.css";

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        last: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signup"))
    }, [data, touched])

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            alert("You have registered successfully", "success")
        } else {
            alert("Invalid data!", "error")
            setTouched({
                name: true,
                last: true,
                gender: true,
                email: true,
                password: true,
                confirmPassword: true,
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Registration</h2>
                <div className={styles.formField}>
                    <label>First Name</label>
                    <input
                        className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHanlder}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Last Name</label>
                    <input
                        className={(errors.last && touched.last) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="last"
                        value={data.last}
                        onChange={changeHandler}
                        onFocus={focusHanlder}
                    />
                    {errors.last && touched.last && <span>{errors.last}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Gender</label>
                    <select onChange={changeHandler} defaultValue="Select Gender" name="gender" value={data.gender}
                    className={(errors.gender && touched.gender) ? styles.uncompletedG : styles.formInputG}
                    onFocus={focusHanlder} >  
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="female">Prefer not to say</option>
                    </select>
                    {errors.gender && touched.gender && <span>{errors.gender}</span>}  
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type="password" name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                
                <div className={styles.formButtons}>
                    <Link to="/login">Login</Link>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;

