import React, { useEffect, useState } from 'react';
import BasicNav from '../components/navbar'
import styles from '../pages/css/Questions.module.css'
import Button from 'react-bootstrap/Button';
import HomeQuestion from "../components/cards";
import Group from '../components/groupbtn';
import Tagcard from '../components/tagcard';
import axios from 'axios'



function Questions() {


  const [product, setProducts] = useState();
  const [updateProducts, setUpdateProducts] = useState(false);

    //Read Questions
  useEffect(() => {
      axios.get('http://localhost:5000/api/allQuestions')
          .then(res => {
              let productData = res.data;
              let slicedArray = [];
              slicedArray = productData.slice(0, 4);
              let renderProducts = slicedArray.map((item) => <HomeQuestion key={item._id} productId={item._id} name={item.name} title={item.title} question={item.question} total={item.votes.total} likes={item.votes.likes} dislikes={item.votes.dislikes} tagOne={item.tags.tagOne} tagTwo={item.tags.tagTwo} tagThree={item.tags.tagThree} editRender={setUpdateProducts} />);
              setProducts(renderProducts);
              setUpdateProducts(false);
          })
          .catch(err => console.log(err))
  }, [updateProducts])


  return (
    <>
    <BasicNav/>
    <div className={styles.main_container}>

        <div className={styles.left_panel}>
          <Tagcard/>
        </div>
        <div className={styles.questions_section}>
            <div className={styles.top_container}>
                <h1 className={styles.question_heading}>Questions</h1>
                <div className={styles.groupbtn_edit}>
                  <Group/>
                  </div>

                <Button className={styles.ask_btn} variant="primary">Ask Question</Button>{''}
                <div className={styles.more_info_row}>
                    <h5 className={styles.totalQ}>Total Questions:</h5>
                </div>
            </div>
        
            {/* <div className={styles.icons_container}></div>
              <div className={styles.questions_box}>
                <p className={styles.question_one}>I dont understand when you create new console app and you create new class and add new variable amd new mothods</p>
            </div> */}
            <div className={styles.questions_group_container}>
       {product}
            <HomeQuestion/>
            <HomeQuestion/>
            <HomeQuestion/>
            <HomeQuestion/>
            </div>
        </div>
        <div className={styles.right_panel}></div>

    </div>

    </>
  )
}

export default Questions