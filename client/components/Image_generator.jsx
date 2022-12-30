import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import Imagemodal from "./Image_modal";
import { ThreeDots } from "react-loader-spinner";

const Image_generator = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [size, setSize] = useState("");
  const [spinner,setSpinner] = useState("");
  const [error,setError] = useState("")

  const handleChange = (e) => {
    setPrompt(e.target.value);
    setResponse("");
    setSpinner("")
  };

  const handleSubmit = async () => {
    try {
      setSpinner(true)
      console.log(prompt);
      console.log(size);
      const url = "http://localhost:8000/openai/generateimage";
  
      const res = await axios.post(url, {
        prompt: prompt,
        size: size,
      });
      setResponse(res.data.imgUrl);
      setSpinner("")
      setPrompt("")
    } catch (error) {
      setError(true)
      setSpinner("")
    }
  };

  const handleRadio = (e) => {
    setSize(e.target.value);
    setSpinner("")
    setResponse("");
  };

  return (
    <div className="Image_generator bg-dark vh-100" style={{ paddingTop: "190px" }}>
      <h1 className="text-light text-center">AI Image Generator</h1>
      <Form className="text-center mt-4">
        <Form.Group className="w-50 mx-auto mb-2">
          <Form.Control as="textarea" rows={1} onChange={handleChange} value={prompt}>
            Ask the AI anything...
          </Form.Control>
        </Form.Group>
        <div key={`inline-radio`} className="mb-3 text-light" onChange={handleRadio}>
          <Form.Check inline label="small" name="group1" type="radio" value="256x256" id={`inline-radio-small`} defaultChecked/>
          <Form.Check inline label="medium" name="group1" type="radio" value="512x512" id={`inline-radio-medium`} />
          <Form.Check inline label="large" name="group1" type="radio" value="1024x1024" id={`inline-radio-large`} />
        </div>
        <Button onClick={handleSubmit}>Submit</Button>
        <div className="d-flex justify-content-center mt-5">
          {spinner && <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#0275d8"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />}
          {error && <h2 className="text-danger">Something went wrong...</h2>}
        </div>
      </Form>
      <div className="vw-100">{response && <Imagemodal image={response} size={size} />}</div>
    </div>
  );
};

export default Image_generator;
