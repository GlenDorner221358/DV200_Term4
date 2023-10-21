import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from '../components/css/tagcard.module.css';


function Tagcard({ setSelectedTag }) {

  return (
    <div>
    <Card>
    <Card.Header as="h6">Filter by tags:</Card.Header>
      <Card.Body>

      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('HTML')}>HTML</Button> 
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('JavaScript')}>JavaScript</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('CSS')}>CSS</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('Axios')}>Axios</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('UseState')}>UseState</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('React')}>Reactjs</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('MERN')}>MERN</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('LAMP')}>LAMP</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('SQL')}>SQL</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('NoSQL')}>NoSQL</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('Kotlin')}>Kotlin</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('Xcode')}>Xcode</Button>
      <Button variant="primary" className={styles.spacer} onClick={() => setSelectedTag('Bootstrap')}>Bootstrap</Button>

      </Card.Body>
    </Card>
    </div>
  )
}

export default Tagcard