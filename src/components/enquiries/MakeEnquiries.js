import Heading from "../layout/Heading";
import EnquiryForm from "../forms/EnquiryForm";
import Container from "react-bootstrap/container";
import IntroText from "../layout/IntroText";

export default function MakeEnquiries() {
  return (
    <>
      <Container>
        <Heading title="Send us your enquiry" />
        <IntroText
          content="When receiving your enquiry we will check our availabilty
        against your wishes. Our response time is within 6 hours. Call us on +4747789212 if you need faster
        confirmation and We will do our best to help you"
        />
        <EnquiryForm />
      </Container>
    </>
  );
}
