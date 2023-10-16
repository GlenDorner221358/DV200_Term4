import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from '../components/css/tagcard.module.css';

function tagcard() {
  return (
    <div>
    <Card>
    <Card.Header as="h6">Filter by tags:</Card.Header>
      <Card.Body>
      <Button variant="primary" className={styles.spacer}>HTML</Button> 
      {/* <div className={styles.space}></div> */}
      <Button variant="primary" className={styles.spacer}>JavaScript</Button>
      {/* <div className={styles.space}></div> */}
      <Button variant="primary" className={styles.spacer}>CSS</Button>
      {/* <div className={styles.space}></div> */}
      <Button variant="primary" className={styles.spacer}>Axios</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary" className={styles.spacer}>UseState</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary" className={styles.spacer}>Reactjs</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary" className={styles.spacer}>MERN</Button>
      {/* <div className={styles.space}></div> */}
      <Button variant="primary" className={styles.spacer}>LAMP</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary" className={styles.spacer}>SQL</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary" className={styles.spacer}>NoSQL</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary" className={styles.spacer}>Kotlin</Button>
       {/* <div className={styles.space}></div> */}
      <Button variant="primary" className={styles.spacer}>Xcode</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default tagcard