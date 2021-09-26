import Heading from "../layout/Heading";
import HotelList from "./HotelList";
import IntroText from "../layout/IntroText";

export default function Hotels() {
  return (
    <>
      <Heading title="Our Hotels" />
      <IntroText
        content="We have something for everyone!
      Hotel, Guesthouse, Bed and Breakfast"
      />
      <HotelList />
    </>
  );
}
