import React from 'react';
import styles from 'components/common/Header/header.module.css';
import userIcon from 'assets/icons/userIcon.png';
import flashDot from 'assets/images/dot.gif';

const Header = () => {
    return (
        <>
            <header>

                <div className={styles['header-bg']}>
                    <div className={styles['header-head']}>
                        <h1>
                            Persona
                        </h1>
                    </div>

                    <div>
                        <button className={styles['user-icon']}>
                            <img src={userIcon} alt="user-icon" />
                            <img className={styles['active-dot']} src={flashDot} alt="flash-dot" />
                        </button>
                    </div>

                </div>

            </header>
        </>
    )
}

export default Header