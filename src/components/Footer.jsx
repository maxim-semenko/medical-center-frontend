import React from 'react'
import {Col, Container, Navbar} from "react-bootstrap"

function Footer() {
    return (
        <div style={{paddingTop: "30px"}}>
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div style={{fontSize: "12px"}}>
                            {new Date().getUTCFullYear()}, All rights Reserved by Maxim Semenko
                        </div>
                    </Col>
                </Container>
            </Navbar>
        </div>
    );
}

export default Footer