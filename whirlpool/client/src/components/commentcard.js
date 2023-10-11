import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import VoteImage from '../icons/package.svg';
import LikeImage from '../icons/thumbs-up.svg';
import DislikeImage from '../icons/thumbs-down.svg';

import styles from '../pages/css/single.css'

function SingleComment() {
    return (
        <div class="comment">
        <Card style={{marginLeft: "12%", marginRight: "12%"}}>
            <Card.Header>User name</Card.Header>
            <Card.Body>
                <div className={styles.cardLeft}>
                    <Figure>
                        <div class="left">
                            <Figure.Caption style={{ display: "inline", padding: "5px" }}>0</Figure.Caption>
                            <Figure.Image style={{ display: "inline"}} alt="likes icon" width="20px" height="20px" src={LikeImage} />
                        </div>
                    </Figure>
                </div>
                <div className={styles.cardRight}>
                    <Card.Text >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                </div>
            </Card.Body>


        </Card >
        </div>
    );
}

export default SingleComment;