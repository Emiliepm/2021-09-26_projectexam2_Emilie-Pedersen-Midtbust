import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";
import Container from "react-bootstrap/Container";
import IntroText from "../layout/IntroText";

export default function Login() {
  return (
    <>
      <Container>
        <Heading title="Admin" />
        <IntroText content="Welcome! Please log in" />
        <LoginForm />
      </Container>
    </>
  );
}
