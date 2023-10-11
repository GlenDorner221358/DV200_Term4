import React from 'react';
import BasicNav from '../components/navbar'
import styles from './css/Questions.module.css'
import Button from 'react-bootstrap/Button';
function Questions() {
  return (
    <>
    <BasicNav/>
    <div className={styles.main_container}>

        <div className={styles.left_panel}></div>
        <div className={styles.questions_section}>
            <div className={styles.top_container}>
                <h1 className={styles.question_heading}>Questions</h1>
                <Button className={styles.ask_btn} variant="primary">Ask Question</Button>{''}
            </div>
            <div className={styles.questions_box}>
            </div>
            <div className={styles.questions_group_container}></div>
        </div>
        <div className={styles.right_panel}></div>

    </div>

    </>
  )
}

export default Questions