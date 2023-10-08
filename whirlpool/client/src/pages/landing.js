import React from "react";
import BasicNav from '../components/navbar';

import HomeQuestion from "../components/cards";
import styles from './landing.module.css'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Landing() {
    return (
        <div>
            <BasicNav />
            <hr />
            <div className={styles.body_container}>

                <div className={styles.left_col}>
                    <div style={{ width: "99%", display:"block", marginLeft:"2%" }}>
                        <Form >
                        <Row>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Search Topics"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                    </div>
                    <br/>
                    <HomeQuestion />
                    <HomeQuestion />
                    <HomeQuestion />
                    <HomeQuestion />
                    <HomeQuestion />
                    <HomeQuestion />
                    <HomeQuestion />
                    <HomeQuestion />
                </div>


                <div className={styles.right_col}>
                    <Form>
                        <Form.Label><b>Filter by tags:</b></Form.Label>
                        <Form.Check // prettier-ignore
                            type="checkbox"
                            label="AllTags"
                        />
                        <Form.Check // prettier-ignore
                            type="checkbox"
                            label="React"
                        />
                        <Form.Check // prettier-ignore
                            type="checkbox"
                            label="Bootstrap"
                        />
                        <Form.Check // prettier-ignore
                            type="checkbox"
                            label="JavaScript"
                        /><Form.Check // prettier <Form.Check // prettier-ignore
                            type="checkbox"
                            label="Python"
                        />
                        <Form.Check // prettier-ignore
                            type="checkbox"
                            label="Insomnia"
                        /><br />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </div>
            </div>

        </div>
    )
}

export default Landing;
