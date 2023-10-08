import React from 'react';
import BasicNav from '../componants/navbar'
import styles from '../pages/Questions.module.css'
function Questions() {
  return (
    <>
    <BasicNav/>
    <div className={styles.main_container}>

        <div className={styles.left_panel}></div>
        <div className={styles.questions_section}>
            <div className={styles.top_container}>
                <h1 className={styles.question_heading}>Questions</h1>
            </div>
            <div className={styles.questions_box}>
                
            </div>

        </div>
        <div className={styles.right_panel}></div>

    </div>

    </>
  )
}

export default Questions