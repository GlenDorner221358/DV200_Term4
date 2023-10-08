import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import VoteImage from '../icons/package.svg';
import LikeImage from '../icons/thumbs-up.svg';
import DislikeImage from '../icons/thumbs-down.svg';

import styles from '../pages/landing.module.css'

function HomeQuestion() {
    return (
        <Card style={{margin: "2%"}}>
            <Card.Header>User name</Card.Header>
            <Card.Body>
                <div className={styles.cardLeft}>
                    <Figure>
                        <div>
                            <Figure.Caption style={{ display: "inline", padding: "5px" }} >0</Figure.Caption>
                            <Figure.Image style={{ display: "inline" }} alt="votes icon" width="14px" height="14px" src={VoteImage} />
                        </div>
                        <div>
                            <Figure.Caption style={{ display: "inline", padding: "5px" }}>0</Figure.Caption>
                            <Figure.Image style={{ display: "inline" }} alt="likes icon" width="14px" height="14px" src={LikeImage} />
                        </div>
                        <div>
                            <Figure.Caption style={{ display: "inline", padding: "5px" }}>0</Figure.Caption>
                            <Figure.Image style={{ display: "inline" }} alt="dislikes icon" width="14px" height="14px" src={DislikeImage} />
                        </div>
                    </Figure>
                </div>
                <div className={styles.cardRight}>
                    <Card.Title>Question Title</Card.Title>
                    <Card.Text >
                        Brief description on what the topic is about...
                    </Card.Text>
                    <Button style={{float: "right"}}>View Question</Button>
                </div>
            </Card.Body>


        </Card >
    );
}

export default HomeQuestion;