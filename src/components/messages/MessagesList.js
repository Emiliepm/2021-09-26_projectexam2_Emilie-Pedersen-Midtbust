import { useState, useEffect, useContext } from "react";
import useAxios from "../../hooks/useAxios";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AuthContext from "../../context/AuthContext";

function MessagesList() {
  const [messages, setMessages] = useState([]);
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
        const response = await http.get("/messages");
        console.log("response", response.data);
        setMessages(response.data);
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
    return <h2>An error occured: {error}</h2>;
  }

  return (
    <>
      <Container>
        <Row xs={1} sm={2} md={2} lg={3}>
          {messages.map((message) => (
            <Col key={message.id}>
              <Card className="admin__card">
                <Card.Body>
                  <Card.Title>
                    <h2>Message:</h2>
                  </Card.Title>
                  <Card.Text>First Name: {message.firstName}</Card.Text>
                  <Card.Text>Last Name: {message.lastName}</Card.Text>
                  <Card.Text>Message: {message.message}</Card.Text>
                  <Card.Text>Email: {message.email}</Card.Text>
                  <Card.Text>Subject: {message.subject}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MessagesList;
