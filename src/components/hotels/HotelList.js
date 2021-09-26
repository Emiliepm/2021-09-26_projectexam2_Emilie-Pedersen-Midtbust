import { useState, useEffect } from "react";
import HotelItem from "./HotelItem";
import { BASE_URL } from "../../constants/Api";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(function () {
    const hotelsUrl = BASE_URL + "/Hotels";

    async function fetchData() {
      try {
        const response = await fetch(hotelsUrl);

        if (response.ok) {
          const json = await response.json();
          setHotels(json);
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
    return <div>Something went wrong: {error}</div>;
  }

  const filteredHotels =
    search.length === 0
      ? hotels
      : hotels.filter((hotel) =>
          hotel.name.toLowerCase().includes(search.toLowerCase())
        );
  console.log(filteredHotels);

  return (
    <>
      <Container>
        <div className="filter">
          <input
            className="filter__input"
            type="text"
            placeholder="Search hotels here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Row xs={1} sm={2} md={2} lg={3}>
          {filteredHotels.map((hotel) => (
            <Col key={hotel.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={hotel.image[0] ? hotel.image[0].url : ""}
                />
                <Card.Body>
                  <Card.Title>{hotel.name}</Card.Title>
                  <HotelItem id={hotel.id} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HotelList;
