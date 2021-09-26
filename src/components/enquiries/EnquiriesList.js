import { useState, useEffect, useContext } from "react";
import useAxios from "../../hooks/useAxios";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AuthContext from "../../context/AuthContext";

function EnquiriesList() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth] = useContext(AuthContext);

  const http = useAxios();
  const history = useHistory();

  if (auth === null) {
    history.push("/");
  }

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await http.get("/enquiries");
        console.log("response", response.data);
        setEnquiries(response.data);
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
        <Row xs={1} sm={2} md={2} lg={3}>
          {enquiries.map((inquiry) => (
            <Col key={inquiry.id}>
              <Card className="admin__card">
                <Card.Body>
                  <Card.Title>
                    <h2>Personalia:</h2>
                  </Card.Title>
                  <Card.Text>First name: {inquiry.firstName}</Card.Text>
                  <Card.Text>Last name: {inquiry.lastName}</Card.Text>
                  <Card.Text>Email: {inquiry.email}</Card.Text>
                  <Card.Text>Mobile: {inquiry.mobile}</Card.Text>
                  <Card.Title>
                    <h2>Hotel request:</h2>
                  </Card.Title>
                  <Card.Text>Hotel name: {inquiry.hotelName}</Card.Text>
                  <Card.Text>Arrival: {inquiry.arrivalDate}</Card.Text>
                  <Card.Text>Departure: {inquiry.departureDate}</Card.Text>
                  <Card.Text>Adults: {inquiry.numberOfAdults}</Card.Text>
                  <Card.Text>Children: {inquiry.numberOfChildren}</Card.Text>
                  <Card.Text>
                    Additional information: {inquiry.additionalInfo}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default EnquiriesList;
