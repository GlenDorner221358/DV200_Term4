import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from '../pages/css/Questions.module.css'

import BasicNav from '../components/navbar'
import HomeQuestion from "../components/cards";
import Group from '../components/groupbtn';
import Tagcard from '../components/tagcard';

function Questions() {

  const [Question, setQuestions] = useState();
  const [updateQuestions, setUpdateQuestions] = useState(false);

  let defaultFormVals = ["name", "title", "question", "tagOne", "tagTwo", "tagThree"];

  const [formValues, setFormValues] = useState(defaultFormVals);


  //Read Questions
  useEffect(() => {
    axios.get('http://localhost:5001/api/allQuestions')
      .then(res => {
        let QuestionData = res.data;
        let slicedArray = [];
        slicedArray = QuestionData.slice(0, 4);
        let renderQuestions = slicedArray.map((item) => <HomeQuestion key={item._id} QuestionId={item._id} name={item.name} title={item.title} question={item.question} total={item.votes.total} likes={item.votes.likes} dislikes={item.votes.dislikes} tagOne={item.tags.tagOne} tagTwo={item.tags.tagTwo} tagThree={item.tags.tagThree} editRender={setUpdateQuestions} />);
        setQuestions(renderQuestions);
        setUpdateQuestions(false);
      })
      .catch(err => console.log(err))
  }, [updateQuestions])


  // Create a new question

  const getValues = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }


  const addQuestion = (e) => {
    // e.preventDefault();


    let payload = {
      name: ['name'],
      title: ['title'],
      question: ['question'],
      tags: {
          tagOne: formValues['varOne'],
          tagTwo: formValues['varTwo'],
          tagThree: formValues['varThree']
      }
    }


    axios.post("http://localhost:5001/api/newQuestion", payload)
      .then((res) => {
        if (res) {
          console.log("Item Added");
          setUpdateQuestions(true);
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <BasicNav />

    <div className={styles.create}>
      {/* new question form */}
      <Form onSubmit={addQuestion} style={{ marginTop: "2%", width: "56%", marginLeft: "auto", marginRight: "auto" }}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="string" placeholder="User"  onChange={getValues} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" type="string" placeholder="Title" onChange={getValues} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Question</Form.Label>
          <Form.Control name="question" as="textarea" rows={3} placeholder="Question Here..." onChange={getValues} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tag One</Form.Label>
          <Form.Control name="tagOne" type="text" onChange={getValues} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tag Two (optional)</Form.Label>
          <Form.Control name="tagTwo" type="text" onChange={getValues} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Tag Three (optional)</Form.Label>
          <Form.Control name="tagThree" type="text" onChange={getValues} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ width: "100%", marginTop: "2%", marginBottom: "2%" }}>
          Submit
        </Button>
      </Form>
    </div>

      <div className={styles.main_container}>

        <div className={styles.left_panel}>
          <Tagcard />
        </div>
        <div className={styles.questions_section}>
          <div className={styles.top_container}>
            <h1 className={styles.question_heading}>Questions</h1>

            <div className={styles.groupbtn_edit}>
              <Group />
            </div>

            <Button className={styles.ask_btn} variant="primary">Ask Question</Button>{''}

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