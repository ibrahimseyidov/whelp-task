import React, { useState } from 'react'
import styles from 'components/Persona/NewUserModal/newusermodal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setUserModal } from 'redux/features/createUserSlice';
import { useAddUsersData } from 'hooks/useUsersData';
import 'react-toastify/dist/ReactToastify.css';

const NewUserModal = () => {

    const [isValidName, setIsValidName] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidNumber, setIsValidNumber] = useState(false);

    const [userName, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userNumber, setUserNumber] = useState("");

    const dispatch = useDispatch()
    const selUserModal = useSelector((state) => state.createUser.userModal)

    const { mutate: addUser, isLoading, isError, error } = useAddUsersData();

    const checkName = (e) => {
        const userFullName = e.target.value;
        const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;

        const isValid = nameRegex.test(userFullName);
        if (isValid) setUsername(userFullName)
        setIsValidName(isValid)
    }

    const checkEmail = (e) => {
        const userEmail = e.target.value;
        const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

        const isValid = emailRegex.test(userEmail);
        if (isValid) setUserEmail(userEmail)
        setIsValidEmail(isValid)
    }

    const checkMobileNum = (e) => {
        const userNumber = e.target.value;
        const numberRegex = /^\+(?:\d{1,3})?[0-9. -]+$/i;

        const isValid = numberRegex.test(userNumber);
        if (isValid) setUserNumber(userNumber);
        setIsValidNumber(isValid)
    }

    const handleBoxClick = (e) => {
        e.stopPropagation();
    }

    const handleUserInfo = (e) => {
        e.preventDefault()
        let userInfo
        setIsValidName(false);
        setIsValidEmail(false);
        setIsValidNumber(false);

        const { v4: uuidv4 } = require('uuid');
        const randomId = uuidv4();

        if (userName && userEmail && userNumber) {
            userInfo = {
                "id": randomId,
                "name": userName,
                "email": userEmail,
                "phone": userNumber,
                "company": {
                    "name": "Not Work"
                }
            }
            addUser(userInfo)
            dispatch(setUserModal())
        }
    }


    return (
        <>
            {
                selUserModal ?
                    <>
                        <div className={styles['user-modal-container']}>
                            <div onClick={() => dispatch(setUserModal())} className={styles.overlay}>
                                <div onClick={(e) => handleBoxClick(e)} className={styles['user-modal-bg']}>
                                    <div className={styles['user-modal-head']}>
                                        <h3>İstifadəçi yarat</h3>
                                        <span>Xanaları tam doldurduğunuzdan əmin olun əks halda istifadəçi yaradılmayacaq.</span>
                                    </div>
                                    <div className={styles['user-input-area']}>
                                        <form>
                                            <label className={!isValidName ? `${styles['pure-material-textfield-outlined']}` : `${styles['green-textfield-outlined']}`}>
                                                <input onChange={(e) => checkName(e)} type="text" id='input' required placeholder='' />
                                                <span>Ad Soyad</span>
                                            </label>
                                            <label className={!isValidEmail ? `${styles['pure-material-textfield-outlined']}` : `${styles['green-textfield-outlined']}`}>
                                                <input onChange={(e) => checkEmail(e)} type="text" id='input' required placeholder='' />
                                                <span>Email</span>
                                            </label>
                                            <label className={!isValidNumber ? `${styles['pure-material-textfield-outlined']}` : `${styles['green-textfield-outlined']}`}>
                                                <input onChange={(e) => checkMobileNum(e)} type="text" id='input' required placeholder='' />
                                                <span>Mobil</span>
                                            </label>
                                            <button aria-label="close" disabled={!isValidName && !isValidEmail && !isValidNumber} onClick={(e) => handleUserInfo(e)} className={isValidName && isValidEmail && isValidNumber ? styles["create-user-btn"] : styles["create-user-btn-disable"]}>YARAT</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : ''
            }
        </>
    )
}

export default NewUserModal