import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import EnquiryItem from "../enquiries/EnquiryItem";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function HotelDetail() {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.pushState("/");
  }

  useEffect(function () {
    const hotelUrl = BASE_URL + "/hotels/" + id;

    async function fetchData() {
      try {
        const response = await fetch(hotelUrl);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setHotel(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <Container>
        <Row xs={1} sm={1} md={1} lg={1}>
          <Col key={hotel.id}>
            <Card className="card__enquiry">
              <Card.Img
                variant="top"
                src={hotel.image[0] ? hotel.image[0].url : ""}
              />
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>Price from: {hotel.price} NOK,-</Card.Text>
                <Card.Text>Details: {hotel.description}</Card.Text>
                <Card.Text>
                  <EnquiryItem name={hotel.name} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
