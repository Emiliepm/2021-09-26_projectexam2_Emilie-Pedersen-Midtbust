import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import hotel_three from "../../images/hotel_three.jpg";
import floien from "../../images/floien.jpg";
import Hero from "../layout/Hero";
import SubHeading from "../layout/SubHeading";
import IntroText from "../layout/IntroText";

export default function Home() {
  return (
    <>
      <Hero />
      <Container fluid>
        <SubHeading title="Hand-picked accommodations" />
        <IntroText content="Choose between our hotels, guesthouses and Bed and Breakfast in Bergen" />
        <Row className="about__row">
          <Col xs={12} sm={6}>
            <h2>Hotels</h2>
            <a href="/hotels">
              <img
                src={hotel_three}
                alt="A cozy living room with pine walls and modern furniture"
              />
            </a>
          </Col>
          <Col xs={12} sm={6}>
            <h2>Bergen</h2>
            <a href="/about">
              <img
                src={floien}
                alt="View from Mount Fløyen in Bergen towards the city centre"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
