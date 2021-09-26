import Heading from "../layout/Heading";
import IntroText from "../layout/IntroText";
import ContactForm from "../forms/ContactForm";
import Container from "react-bootstrap/Container";

export default function Contact() {
  return (
    <>
      <Container>
        <Heading title="We’d love to hear from you" />
        <IntroText content="Please contact us if you have any question(s), we will get back to you within 24h " />
        <ContactForm />
      </Container>
    </>
  );
}
