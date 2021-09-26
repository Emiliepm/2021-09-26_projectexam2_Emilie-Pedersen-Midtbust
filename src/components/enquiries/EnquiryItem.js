import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function EnquiryItem({ name }) {
  return (
    <Link to={`makeenquiry/${name}`}>
      <button className="enquiry__btn">Make Enquiry</button>
    </Link>
  );
}

EnquiryItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default EnquiryItem;
