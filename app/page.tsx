//the NEXT.js boiler template page with documentation 
//deleted the code and used isaacs code from pg 17 - bootstrap components
'use client' //will make contents render on client side - will show below code. Bootstrap has no support for SSR
import Link from 'next/link';
import type { NextPage } from "next";
import { Button, Col, Container, Row } from "react-bootstrap";

//THIS PAGE IS localhost:3000
const Home: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Janine's NextJS Tutorial</h1>
          <p>Hello</p>
          <Button>My Button</Button>
          <Link href="/posts/first-post">Read this</Link>
          <Link href="/posts/x">Other</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;