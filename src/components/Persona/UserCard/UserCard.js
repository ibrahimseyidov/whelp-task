import React from 'react';
import styles from 'components/Persona/UserCard/usercard.module.css'
import personImage from 'assets/images/personImage.png';
import trashIcon from 'assets/icons/trashIcon.png'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { delUserId, delUsermodal } from 'redux/features/userDeleteSlice';
import { useUserData } from 'hooks/useUserData';
import { motion } from "framer-motion";


const UserCard = (props) => {
    const { name, id } = props
    const companyName = props.company.name

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { data, isLoading, isError } = useUserData(id)

    const handleDeleteModal = () => {
        dispatch(delUsermodal())
        dispatch(delUserId(id))
    }

    const handleEdit = () => {
        navigate(`/edit-page/user/${id}`)
    }

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    return (
        <>
            <motion.div
                className={styles['user-card-container']}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <div className={styles['user-card-image']}>
                    <img src={personImage} alt="person" />
                </div>
                <div className={styles['user-card-bot']}>
                    <div className={styles['user-card-head']}>
                        <h3>{name}</h3>
                        <span>{companyName}</span>
                    </div>
                    <div className={styles['edit-area']}>
                        <button onClick={() => handleEdit()} className={styles['edit-btn']}>Redaktə et</button>
                        <button onClick={() => handleDeleteModal()} className={styles['trash-btn']}>
                            <img src={trashIcon} alt="trash" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default UserCard