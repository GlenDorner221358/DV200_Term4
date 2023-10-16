import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from '../components/css/tagcard.module.css';
function tagcard() {
  return (
    <div>
    <Card>
    <Card.Header as="h6">Watched Tags</Card.Header>
      <Card.Body>
      <Button variant="primary">HTML</Button> 
      {/* <div className={styles.space}></div> */}
      <Button variant="primary">JavaScript</Button>
      {/* <div className={styles.space}></div> */}
      <Button variant="primary">CSS</Button>
      {/* <div className={styles.space}></div> */}
      <Button variant="primary">Axios</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary">UseState</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary">Reactjs</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary">MERN</Button>
      {/* <div className={styles.space}></div> */}
      <Button variant="primary">LAMP</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary">SQL</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary">NoSQL</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary">Kotlin</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary">Xcode</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default tagcard