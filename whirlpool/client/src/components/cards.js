import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import VoteImage from '../icons/package.svg';
import LikeImage from '../icons/thumbs-up.svg';
import DislikeImage from '../icons/thumbs-down.svg';

import styles from '../pages/css/landing.module.css'

const HomeQuestion = (props) => {


    return (
        <Card style={{ margin: "2%" , width: "100%" }}>
            <Card.Header style={{backgroundColor: "white"}}>{props.name}</Card.Header>
            <Card.Body>
                <div className={styles.cardLeft}>
                    <Figure>
                        <div style={{width:"50px", height:"30px"}}>
                            <Figure.Caption style={{ display: "inline", padding: "10px" }} >{props.total}</Figure.Caption>
                            <Figure.Image style={{ display: "inline" }} alt="votes icon" width="14px" height="14px" src={VoteImage} />
                        </div>
                        <div style={{width:"50px", height:"30px"}}>
                            <Figure.Caption style={{ display: "inline", padding: "10px" }}>{props.likes}</Figure.Caption>
                            <Figure.Image style={{ display: "inline" }} alt="likes icon" width="14px" height="14px" src={LikeImage} />
                        </div>
                        <div style={{width:"50px", height:"30px"}}>
                            <Figure.Caption style={{ display: "inline", padding: "10px" }}>{props.dislikes}</Figure.Caption>
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