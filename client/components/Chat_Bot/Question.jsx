import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { TypeAnimation } from "react-type-animation";

const question = ({ question }) => {
  const val = `${question}`;

  return (
    <div className="App ">
      {/* <MarkdownEditor
    value={val}
  /> */}
      {/* <TypeAnimation sequence={[, 1000]} /> */}
      <ReactMarkdown children={val} />
    </div>
  );
};

export default question;
