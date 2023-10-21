import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import LikeImage from '../icons/thumbs-up.svg';
import { useState, useEffect } from "react";
import axios from 'axios'

import styles from '../pages/css/single.css'

function SingleComment() {
    const question = JSON.parse(sessionStorage.getItem("question"));
    const queTitle = question.title;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/api/comments/" + queTitle)
        .then((res) => {
            setComments(res.data);
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <div class="comment" style={{marginBottom: "2%"}}>
        {comments.map((comment) => (
            <Card style={{marginLeft: "12%", marginRight: "12%"}}>
                <Card.Header>{comment.name}</Card.Header>
                <Card.Body>
                    <div className={styles.cardLeft}>
                        <Figure>
                            <div class="left">
                                <Figure.Caption style={{ display: "inline", padding: "5px" }}>{comment.likes}</Figure.Caption>
                                <Figure.Image style={{ display: "inline"}} alt="likes icon" width="20px" height="20px" src={LikeImage} />
                            </div>
                        </Figure>
                    </div>
                    <div className={styles.cardRight}>
                        <Card.Text >
                        {comment.comment}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card >
        ))}
        </div>
    );
}

export default SingleComment;
