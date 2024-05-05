import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Footer() {

  const linkedInUrl = "https://www.linkedin.com/";
  const githubUrl = "https://github.com/";

  return (
    <Card className=" mt-5 text-center">
      <Card.Body>
        <Card.Title>Developer Frank</Card.Title>
        <Card.Text>
          I hope you admire my content!<br/>
          You kan finde me on these platforms bellow:
          </Card.Text>
        
        <Button variant="primary" as="a" href={githubUrl} target="_blank" className="me-3">Github <i class="bi bi-github"></i></Button> 
        <Button variant="primary" as="a" href={linkedInUrl} target="_self">LinkedIn <i class="bi bi-linkedin"></i></Button>
      </Card.Body>
      
    </Card>
  );
}


