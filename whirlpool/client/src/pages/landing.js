import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import BasicNav from '../components/navbar';
import HomeQuestion from "../components/cards";
import styles from './css/landing.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Landing() {
const [product, setProducts] = useState();
const [updateProducts, setUpdateProducts] = useState(false);
const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
    axios.get('http://localhost:5001/api/allQuestions')
        .then(res => {
            let productData = res.data;
            let renderProducts = productData
            .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.question.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((item) => <HomeQuestion key={item._id} productId={item._id} name={item.name} title={item.title} question={item.question} total={item.votes.total} likes={item.votes.likes} dislikes={item.votes.dislikes} tagOne={item.tags.tagOne} tagTwo={item.tags.tagTwo} tagThree={item.tags.tagThree} editRender={setUpdateProducts} />);
            setProducts(renderProducts);
            setUpdateProducts(false);
        })
        .catch(err => console.log(err))
}, [updateProducts, searchTerm])

    return (
        <div>
            <BasicNav />
            <hr />
            <div className={styles.body_container}>

                <div className={styles.left_col}>
                    <div style={{ width: "99%", display: "block", marginLeft: "2%" }}>
                        <Form >
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        className=" mr-sm-2"
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <br />
                    <div className="row row-cols-1 row-cols-md-4 g-4" style={{ margin: "1%" }} > {/* Determine how many I want to display --> row-cols-md-5*/}
                        {product}
                    </div>
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
