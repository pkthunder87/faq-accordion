import Accordion from "react-bootstrap/Accordion";
import "./styles/FaqAccordion.css";

function FaqAccordion() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          What is Frontend Mentor, and how will it help me?
        </Accordion.Header>
        <Accordion.Body>
          Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It&apos;s suitable for all levels and ideal for portfolio
          building.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header bsPrefix="accordion-header">
          Is Frontend Mentor free?
        </Accordion.Header>
        <Accordion.Body>
          Yes, Frontend Mentor offers both free and premium coding challenges,
          with the free option providing access to a range of projects suitable
          for all skill levels.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Can I use Frontend Mentor projects in my portfolio?
        </Accordion.Header>
        <Accordion.Body>
          Yes, you can use projects completed on Frontend Mentor in your
          portfolio. It&apos;s an excellent way to showcase your skills to
          potential employers!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          {" "}
          How can I get help if I&apos;m stuck on a challenge?
        </Accordion.Header>
        <Accordion.Body>
          The best place to get help is inside Frontend Mentor&apos;s Discord
          community. There&apos;s a help channel where you can ask questions and
          seek support from other community members.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FaqAccordion;
