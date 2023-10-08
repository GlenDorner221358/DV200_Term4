import React from 'react';
import BasicNav from '../componants/navbar'
import styles from '../pages/Questions.module.css'
function Questions() {
  return (
    <>
    <BasicNav/>
    <div className={styles.main_container}></div>
    <div className="left_panel"></div>
    </>
  )
}

export default Questions