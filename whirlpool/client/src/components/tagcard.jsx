import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function tagcard() {
  return (
    <div>
    <Card>
    <Card.Header as="h6">Watched Tags</Card.Header>
      <Card.Body>
      <Button variant="primary">HTML</Button>
      <Button variant="primary">JavaScript</Button>
      <Button variant="primary">CSS</Button>
      <Button variant="primary">Axios</Button>
      <Button variant="primary">UseState</Button>
      <Button variant="primary">Reactjs</Button>
      <Button variant="primary">MERN</Button>
      <Button variant="primary">LAMP</Button>
      <Button variant="primary">SQL</Button>
      <Button variant="primary">NoSQL</Button>
      <Button variant="primary">Kotlin</Button>
      <Button variant="primary">Xcode</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default tagcard