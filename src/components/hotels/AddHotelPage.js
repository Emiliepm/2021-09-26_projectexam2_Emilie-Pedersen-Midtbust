import Heading from "../layout/Heading";
import IntroText from "../layout/IntroText";
import AddHotel from "./AddHotel";

export default function Admin() {
  return (
    <>
      <div className="container">
        <Heading title="Add Hotel" />
        <IntroText content="Fill the form to add a new hotel" />
        <AddHotel />
      </div>
    </>
  );
}
