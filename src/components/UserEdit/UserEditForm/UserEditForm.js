import React, { useRef, useState } from 'react'
import styles from 'components/Persona/NewUserModal/newusermodal.module.css'
import styles2 from 'components/UserEdit/UserEditForm/usereditform.module.css'
import { useNavigate, useParams } from 'react-router';
import { useUpdateUserData } from 'hooks/useUsersData';
import { useUserData } from 'hooks/useUserData';

const UserEditForm = () => {
    const { userid } = useParams()
    const navigate = useNavigate()
    const updateUser = useUpdateUserData()

    const onSuccess = (data) => {
        setIsValidName(true)
        setIsValidEmail(true)
        setIsValidNumber(true)

        nameRef.current.value = data?.data.name;
        emailRef.current.value = data?.data.email;
        phoneRef.current.value = data?.data.phone;
        if (data?.data.company.name) setComapnyName(data?.data.company.name)
    }

    const { data, isLoading, isError, refetch } = useUserData(userid, onSuccess)

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const [isValidName, setIsValidName] = useState();
    const [isValidEmail, setIsValidEmail] = useState();
    const [isValidNumber, setIsValidNumber] = useState();

    const [companyName, setComapnyName] = useState("");

    const checkName = (e) => {
        const userFullName = e.target.value;
        const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;

        const isValid = nameRegex.test(userFullName);

        setIsValidName(isValid)
    }

    const checkEmail = (e) => {
        const userEmail = e.target.value;
        const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

        const isValid = emailRegex.test(userEmail);

        setIsValidEmail(isValid)
    }

    const checkMobileNum = (e) => {
        const userNumber = e.target.value;
        const numberRegex = /^\+(?:\d{1,3})?[0-9. -]+$/i;

        const isValid = numberRegex.test(userNumber);

        setIsValidNumber(isValid);
    }

    const handleUserInfo = (e) => {
        e.preventDefault();
        let updateNewUser;
        if (nameRef.current.value && emailRef.current.value && phoneRef.current.value) {
            updateNewUser = {
                "id": userid,
                "name": nameRef.current.value,
                "email": emailRef.current.value,
                "phone": phoneRef.current.value,
                "company": {
                    "name": `${companyName ? companyName : "Not Work"}`
                }
            }
            updateUser.mutateAsync(updateNewUser)
        }
        navigate("/")
    }

    return (
        <>
            <div>
                <h2 className={styles2['edit-user-text']}>İstifadəçini redaktə et</h2>
                <div className={styles['user-input-area']}>
                    <form>
                        <label className={!isValidName ? `${styles['pure-material-textfield-outlined']}` : `${styles['green-textfield-outlined']}`}>
                            <input ref={nameRef} onChange={(e) => checkName(e)} type="text" id='input' required placeholder='' />
                            <span>Ad Soyad</span>
                        </label>
                        <label className={!isValidEmail ? `${styles['pure-material-textfield-outlined']}` : `${styles['green-textfield-outlined']}`}>
                            <input ref={emailRef} onChange={(e) => checkEmail(e)} type="text" id='input' required placeholder='' />
                            <span>Email</span>
                        </label>
                        <label className={!isValidNumber ? `${styles['pure-material-textfield-outlined']}` : `${styles['green-textfield-outlined']}`}>
                            <input ref={phoneRef} onChange={(e) => checkMobileNum(e)} type="text" id='input' required placeholder='' />
                            <span>Mobil</span>
                        </label>
                        <button disabled={!isValidName || !isValidEmail || !isValidNumber} onClick={handleUserInfo} className={!isValidName || !isValidEmail || !isValidNumber ? `${styles["create-user-btn"]} ${styles2['deactive-renew-info-btn']}` : `${styles["create-user-btn"]} ${styles2['renew-info-btn']}`}>MƏLUMATLARI YENILƏ</button>
                        <button onClick={() => navigate('/')} className={styles2['back-btn']}>GERI QAYIT</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserEditForm