/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip, UncontrolledCarousel } from "reactstrap";
import { Link } from "react-router-dom";

const carouselItems3 = [
  {
    src: require("assets/img/이뿌영1.png"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/이뿌영2.png"),
    altText: "Slide 2",
    caption: ""
  },

  {
    src: require("assets/img/이뿌영3.png"),
    altText: "Slide 3",
    caption: ""
  }

];


export default function Download() {
  return (
    

    <div className="section section-download"
      data-background-color="black"
      id="download-section">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
     
                
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              [신청중] 제1회 영어 말하기 Challenge
            </h2>
            <h4 className="description">
              
            </h4>
          </Col>
          
          <Col sm="10" className="text-right">
            <img
            alt="..."
            className="img-raised"
            src={require("assets/img/학사보드 수정.png")}
            style={{ maxWidth: "100%", height: "330" }}
            />
          </Col>


        </Row>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">&nbsp;</p>
        <Row className="justify-content-md-center">
          <Col lg="6">
              <iframe width="100%" height="330px" src="https://www.youtube.com/embed/Nf4D5o6WkYc" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
              </iframe>
            </Col>
        </Row>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">&nbsp;</p>

          <Row className="justify-content-md-center">
          <Col lg="6" className="text-right">
          <iframe
      width="100%"
      height="330px"
      src="https://www.youtube.com/embed/zBldKpCbA7w?si=QEANR_oqrdcN5l86"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
            </Col>
        </Row>

        <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">&nbsp;</p>   

          
        <Row className="justify-content-md-center">
          <Col lg="6" className="text-right">
              <iframe width="100%" height="330px" src="https://www.youtube.com/embed/WQWqXZ07Vrg" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
              </iframe>
            </Col>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">&nbsp;</p>
        </Row> 


        <p data-ke-size="size16">&nbsp;</p>
          

        <Row className="justify-content-center">
          
          <Col className="text-center" lg="8" md="12">
            <Button
            className="btn-round"
            color="info"
            href="https://classroom.google.com/c/Njc4Nzk4OTY4OTQy"
            role="button"
            size="lg"
            >
            영말챌 신청 바로가기
            </Button>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
            className="btn-round"
            color="info"
            href="https://www.youtube.com/watch?v=WQWqXZ07Vrg"
            role="button"
            size="lg"
            >
            영말챌 연습문제 바로가기
            </Button>
          </Col>
        </Row>


      
      </Container>


        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>

        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>

      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              [COMING SOON] 중국어 일본어 문화탐방
            </h2>
            <h4 className="description">
              
            </h4>
          </Col>
  
        </Row>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">&nbsp;</p>
        <Row className="justify-content-md-center">

          
            <Col lg="6" className="text-center">
              <iframe width="100%" height="330px" src="https://www.youtube.com/embed/neeHXnHma6M" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
              </iframe>
            </Col>      
        
                
        </Row>  


      </Container>
                
    </div>


                
   

  );
}
