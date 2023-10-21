// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import VoteImage from '../icons/package.svg';
import LikeImage from '../icons/thumbs-up.svg';
import DislikeImage from '../icons/thumbs-down.svg';
// import { useState, useEffect } from "react";
// import axios from 'axios'

import styles from '../pages/css/single.css'

function SingleQuestion() {
    const question = JSON.parse(sessionStorage.getItem('question'));

    return (
        <Card style={{marginLeft: "10%", marginRight: "10%", marginTop: "3%"}}>
            <Card.Header>{question.name}</Card.Header>
            <Card.Body>
                <div className={styles.cardLeft}>
                    <Figure>
                        <div class="left">
                            <Figure.Caption style={{ display: "inline", padding: "5px" }} >{question.votes.likes}</Figure.Caption>
                            <Figure.Image style={{ display: "inline" }} alt="votes icon" width="20px" height="20px" src={VoteImage} />
                        </div>
                        <div class="left">
                            <Figure.Caption style={{ display: "inline", padding: "5px" }}>{question.votes.total}</Figure.Caption>
                            <Figure.Image style={{ display: "inline"}} alt="likes icon" width="20px" height="20px" src={LikeImage} />
                        </div>
                        <div class="left">
                            <Figure.Caption style={{ display: "inline", padding: "5px" }} >{question.votes.likes}</Figure.Caption>
                            <Figure.Image style={{ display: "inline" }} alt="dislikes icon" width="20px" height="20px" src={DislikeImage} />
                        </div>
                    </Figure>
                </div>
                <div className={styles.cardRight}>
                    <Card.Title style={{fontWeight: "bold", fontSize: '30px'}}>{question.title}</Card.Title>
                    <Card.Text value="question description">
                        {question.question}
                    </Card.Text>
                </div>
            </Card.Body>


        </Card >
    );
}

export default SingleQuestion;