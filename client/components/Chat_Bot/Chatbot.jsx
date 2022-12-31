import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Question from "./Question";
import { ThreeDots } from "react-loader-spinner";

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [spinner, setSpinner] = useState("");

  const handleSubmit = async (e) => {
    setSpinner(true);
    console.log(prompt);
    const url = "http://localhost:8000/openai/chatbot";

    const res = await axios.post(url, {
      prompt: prompt,
    });
    await setResponse(res.data.code);
    console.log(response);
    setSpinner("");
  };

  const handleText = (e) => {
    setPrompt(e.target.value);
    setResponse(" ");
  };

  return (
    <div className="vw-100" style={{ position: "fixed" }}>
      <div className="bg-dark vh-100">
        <div className="d-flex align-items-center justify-content-center pt-5">
          <Card className="w-75" style={{ height: "60vh" }}>
            <Card.Header>Ask me anything...</Card.Header>
            <Card.Body className="overflow-scroll">
              {response && (
                <div className="p-4">
                  <Question question={response} />
                </div>
              )}
            </Card.Body>
            <div className="d-flex justify-content-center w-100" style={{ width: "100px" }}>
              {spinner && (
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#0275d8"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              )}
            </div>
          </Card>
        </div>
        <Form className="text-center">
          <Form.Group className="w-75 mx-auto d-flex">
            <Form.Control as="textarea" rows={1} onChange={handleText}></Form.Control>
            <Button className="h-25" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Chatbot;
