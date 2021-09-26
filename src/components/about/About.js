import React from "react";
import Heading from "../layout/Heading";
import SubHeading from "../layout/SubHeading";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Paragraph from "../layout/Paragraph";
import rain from "../../images/rain.jpg";
import Container from "react-bootstrap/Container";
import agency from "../../images/agency.jpg";
import contact from "../../images/contact.jpg";
import bergenhouse from "../../images/bergenhouse.jpg";

export default function About() {
  return (
    <>
      <Container>
        <Heading title="HOLIDAZE" />
        <SubHeading content="Your local tourism agency in Bergen" />
        <Row className="about__row">
          <Col xs={12} md={6}>
            <h3>Meet the Agency</h3>
            <img
              src={agency}
              alt="Four people sitting in an office with face masks."
            />
            <Paragraph
              content="Our local tourism agency was founded in 2020 during the pandemic by childhood friends
        Tine, Lars, Susanne og Henrik. These real bergensere couldn´t wait until society opened up again, so they put their minds together and 
        decided to create a website where visitors can choose from the best, hand-picked, accommdation possibilties in Bergen to get the best stay. 
        Covering everything from hotels, Bed and Breaksfast and Guesthouses"
            />
          </Col>
          <Col xs={12} md={6}>
            <h3>How does it work?</h3>
            <img src={contact} alt="A hand holding a mobile phone and a PC." />
            <Paragraph
              content="Send us your enquiry and we will get back to you as soon as possible. We check our our availabilty based on the information
                you filled out in the form. If available we will send you an email confirmation, we´ll also send an email if sadly don´t have any available.
                Pay via Vipps or Klarna and we will send your four digit code to open the door to your stay. Enjoy your stay - Doesn´t get simpler than that. 
                And all cleaning is included in the price"
            />
          </Col>
          <Col xs={12} md={6}>
            <h3>Bergen City</h3>
            <img
              src={bergenhouse}
              alt="Traditional white Bergen house with orange roof"
            />
            <h4>A part of Vestlandet</h4>
            <Paragraph
              content="Bergen is a city and municipality in Vestland county in Norway. It has 
              everything a city need but also wonderful nature. Bergen is known for its beautiful nature and mountains. 
              Ulriken, Lyderhorn and Stoltzekleiven are well known hikes, starting point maximum 
              20 minutes away form the city centre. Make your stay comfortable and easy by searching accommodation with us.
              By hotels we mean hotels, Guesthouses and Bed and breakfast."
            />
          </Col>
          <Col xs={12} md={6}>
            <h3>Weather </h3>
            <img
              src={rain}
              alt="A group of people outside walking up Mount Fløyen in pouring rain"
            />
            <h4>Does it always rain?</h4>
            <Paragraph
              content=" People say that it´s always
              raining in Bergen, but that´s not true! Yes, it rains a lot during the autumn, but Bergen also offer sunny days and 
             good weather. There´s a lot to explore so make sure to make the best out of your stay by choosing us."
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
