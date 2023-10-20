import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import VoteImage from '../icons/package.svg';
import LikeImage from '../icons/thumbs-up.svg';
import DislikeImage from '../icons/thumbs-down.svg';
import { useState, useEffect } from "react";
import Axios from 'axios'

import styles from '../pages/css/landing.module.css'

const HomeQuestion = (props) => {

    const [votes, setVotes] = useState(props.total);
    const [likes, setLikes] = useState(props.likes);
    const [dislikes, setDislikes] = useState(props.dislikes);

    const handleLike = async () => {
        setVotes(votes + 1);
        setLikes(likes + 1);

        //test
        let payload = {
            name: data.name,
            title: data.title,
            question: data.question,
            tags: {
                tagOne: data.tags.tagOne,
                tagTwo: data.tags.tagTwo,
                tagThree: data.tags.tagThree
            },
            votes: {
                total: totalVotes,
                likes: data.votes.likes,
                dislikes: data.votes.dislikes
            }
        }

        Axios.patch('http://localhost:5000/api/updateProduct/' + props._id, payload)
        .then(res => {
            if (res) {
              console.log("Like Updated")
              props.close();
            }
          })
          .catch(function (error) {
            console.log(error);
          })

    };

    const handleDislike = async () => {
        setVotes(votes + 1);
        setDislikes(dislikes + 1);
        

        try {
            await Axios.patch('http://localhost:5001/api/updateQuestion/', {
                questionId: props.id,
                change: 'dislikes'
            });
        } catch (error) {
            console.error('Failed to update votes:', error);
        }
    };


    return (
        <Card style={{ margin: "2%" , width: "100%" }}>
            <Card.Header style={{backgroundColor: "white"}}>{props.name}</Card.Header>
            <Card.Body>
                <div className={styles.cardLeft}>
                    <Figure>
                    <div style={{width:"50px", height:"30px"}}>
                            <Figure.Caption style={{ display: "inline", padding: "10px" }} >{votes}</Figure.Caption>
                            <Figure.Image style={{ display: "inline" }} alt="votes icon" width="14px" height="14px" src={VoteImage} />
                        </div>
                        <div style={{width:"50px", height:"30px"}} onClick={handleLike}>
                            <Figure.Caption style={{ display: "inline", padding: "10px" }}>{likes}</Figure.Caption>
                            <Figure.Image style={{ display: "inline" }} alt="likes icon" width="14px" height="14px" src={LikeImage} />
                        </div>
                        <div style={{width:"50px", height:"30px"}} onClick={handleDislike}>
                            <Figure.Caption style={{ display: "inline", padding: "10px" }}>{dislikes}</Figure.Caption>
                            <Figure.Image style={{ display: "inline" }} alt="dislikes icon" width="14px" height="14px" src={DislikeImage} />
                        </div>
                    </Figure>
                </div>
                <div className={styles.cardRight}>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text >
                        {props.question}
                    </Card.Text>
                    <Button style={{ float: "right" }} href="/single">View Question</Button>
                </div>
            </Card.Body>
        </Card >
    );
}

export default HomeQuestion;