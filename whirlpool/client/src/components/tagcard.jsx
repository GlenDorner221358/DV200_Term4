import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from '../components/css/tagcard.module.css';

function tagcard(props) {
  console.log(props);
  return (
    <div>
    <Card>
    <Card.Header as="h6">Filter by tags:</Card.Header>
      <Card.Body>
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('HTML')}>HTML</Button> 
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('JavaScript')}>JavaScript</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('CSS')}>CSS</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('Axios')}>Axios</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('UseState')}>UseState</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('Reactjs')}>Reactjs</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('MERN')}>MERN</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('LAMP')}>LAMP</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('SQL')}>SQL</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('NoSQL')}>NoSQL</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('Kotlin')}>Kotlin</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => props.onTagClick('Xcode')}>Xcode</Button>
      <Button variant="danger" className={styles.spacer} onClick={() => props.onTagClick(null)}>Clear Tags</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default tagcard