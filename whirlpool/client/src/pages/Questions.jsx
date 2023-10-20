import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Button, Modal, Form } from 'react-bootstrap';
import MyModal from '../components/createQuestionModal';

import styles from '../pages/css/Questions.module.css'

import BasicNav from '../components/navbar'
import HomeQuestion from "../components/cards";
import Group from '../components/groupbtn';
import Tagcard from '../components/tagcard';

function Questions() {

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [Question, setQuestions] = useState();
  const [updateQuestions, setUpdateQuestions] = useState(false);

  let defaultFormVals = ["name", "title", "question", "tagOne", "tagTwo", "tagThree"];

  const [formValues, setFormValues] = useState(defaultFormVals);

  const [selectedTag, setSelectedTag] = useState(null);

  const clearTags = () => setSelectedTag(null); // Function to clear tags

  //Read Questions
  useEffect(() => {
    console.log(selectedTag);
    axios.get('http://localhost:5001/api/allQuestions')
      .then(res => {
        let QuestionData = res.data;
        let renderQuestions = QuestionData.map((item) => <HomeQuestion key={item._id} productId={item._id} name={item.name} title={item.title} question={item.question} total={item.votes.total} likes={item.votes.likes} dislikes={item.votes.dislikes} tagOne={item.tags.tagOne} tagTwo={item.tags.tagTwo} tagThree={item.tags.tagThree} editRender={setUpdateQuestions} />);
        setQuestions(renderQuestions);
        setUpdateQuestions(false);
      })
      .catch(err => console.log(err))
  }, [updateQuestions, selectedTag]) // added selectedTag to the dependency array

  return (
    <>
      <BasicNav />
      <MyModal showModal={showModal} handleClose={handleClose} />


      <div className={styles.main_container}>

        <div className={styles.left_panel}>
          <Tagcard onTagClick={setSelectedTag} onClearTags={clearTags} /> 
        </div>
        <div className={styles.questions_section}>
          <div className={styles.top_container}>
            <h1 className={styles.question_heading}>Questions</h1>

            <div className={styles.groupbtn_edit}>
              <Group />
            </div>

            <Button className={styles.ask_btn} variant="primary" onClick={handleShow}>Ask Question</Button>{''}

            <div className={styles.more_info_row}>
              <h5 className={styles.totalQ}>Total Questions:</h5>
            </div>

          </div>
          <div className={styles.questions_group_container}>
            {Question}
          </div>
        </div>
        <div className={styles.right_panel}></div>

      </div>

    </>
  )
}

export default Questions