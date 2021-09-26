import Heading from "../layout/Heading";
import IntroText from "../layout/IntroText";
import MessagesList from "./MessagesList";

export default function Messages() {
  return (
    <>
      <Heading title="Contact Messages" />
      <IntroText content="Messages from our website visitors and customers" />
      <MessagesList />
    </>
  );
}
