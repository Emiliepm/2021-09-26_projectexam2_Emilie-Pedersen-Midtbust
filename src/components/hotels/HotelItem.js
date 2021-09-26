import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HotelItem({ id }) {
  return (
    <Link to={`hoteldetail/${id}`}>
      <button>Details</button>
    </Link>
  );
}

HotelItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default HotelItem;
