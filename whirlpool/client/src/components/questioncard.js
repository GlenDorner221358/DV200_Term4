import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import VoteImage from '../icons/package.svg';
import LikeImage from '../icons/thumbs-up.svg';
import DislikeImage from '../icons/thumbs-down.svg';

import styles from '../pages/css/single.css'

function SingleQuestion() {
    return (
        <Card style={{marginLeft: "10%", marginRight: "10%", marginTop: "3%"}}>
            <Card.Header>User name</Card.Header>
            <Card.Body>
                <div className={styles.cardLeft}>
                    <Figure>
                        <div class="left">
                            <Figure.Caption style={{ display: "inline", padding: "5px" }}>0</Figure.Caption>
                            <Figure.Image style={{ display: "inline"}} alt="likes icon" width="20px" height="20px" src={LikeImage} />
                        </div>
                        <div class="left">
                            <Figure.Caption style={{ display: "inline", padding: "5px" }} >0</Figure.Caption>
                            <Figure.Image style={{ display: "inline" }} alt="votes icon" width="20px" height="20px" src={VoteImage} />
                        </div>
                    </Figure>
                </div>
                <div className={styles.cardRight}>
                    <Card.Title style={{fontWeight: "bold", fontSize: '30px'}}>Question Title</Card.Title>
                    <Card.Text >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                    <Card.Img height={600} src={'https://i.redd.it/uq406jrqafw41.jpg'} />
                    <Card.Text >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                </div>
            </Card.Body>


        </Card >
    );
}

export default SingleQuestion;