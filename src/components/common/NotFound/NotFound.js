import React from 'react';
import styles from 'components/common/NotFound/notfound.module.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <>
            <section className={styles["page_404"]}>
                <div className={styles["container"]}>
                    <div className={styles["row"]}>
                        <div className={styles["col-sm-12"]}>

                            <div className={`${styles["col-sm-10"]} ${styles["col-sm-offset-1"]} ${styles["text-center"]}`}>

                                <div className={styles["four_zero_four_bg"]}>
                                    <h1 className={styles["text-center"]}>404</h1>
                                </div>

                                <div className={styles["contant_box_404"]}>
                                    <h3 className={styles["h2"]}>
                                        Look like you're lost
                                    </h3>
                                    <p>the page you are looking for not avaible!</p>
                                    <button onClick={() => navigate('/')} className={styles["link_404"]}>Go to Home</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default NotFound