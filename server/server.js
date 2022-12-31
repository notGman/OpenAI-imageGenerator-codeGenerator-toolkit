const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors")
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

app.get("/openai/generateimage", (req, res) => {
  res.status(200).json("Hello from the server");
});

app.post("/openai/generateimage", async (req, res) => {
  try {
    const { prompt,size } = req.body;
    const response = await openai.createImage({
      prompt,
      n: 1,
      size,
    });
    const data = response.data.data[0].url;
    res.status(200).json({
      imgUrl: data,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get('/openai/chatbot',(req,res)=>{
  res.status(200).json("Hello from the chatbot server")
})

app.post('/openai/chatbot',async(req,res)=>{
  try {
    const {prompt} = req.body
    const response = await openai.createCompletion({
      model:"text-davinci-003",
      prompt,
      max_tokens: 3000,
      frequency_penalty:0.2,
    })
    // console.log(response.data.choices[0].text);
    const code = response.data.choices[0].text
    res.status(200).json({
      code:code
    })
  } catch (error) {
    console.log(error);
  }
})

const port = process.env.PORT;
app.listen(port, (req, res) => {
  console.log(`Listening to http://localhost:${port}`);
});
