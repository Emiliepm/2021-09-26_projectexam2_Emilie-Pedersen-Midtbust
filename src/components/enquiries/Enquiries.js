import Heading from "../layout/Heading";
import IntroText from "../layout/IntroText";
import EnquiriesList from "./EnquiriesList";

export default function Enquiries() {
  return (
    <>
      <Heading title="Enquiries" />
      <IntroText content="All hotel enquiries will show here" />
      <EnquiriesList />
    </>
  );
}
