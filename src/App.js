import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { useEffect, useState } from 'react';
function App() {
  const [prompt, setPrompt] = useState("")
  const [image, setImage] = useState("")
  useEffect(() => {
    let API_KEY = "<YOUR API KEY HERE>"
    let headers = {
      "Authorization": "Bearer " + API_KEY,
    }
    let url = "https://api.openai.com/v1/images/generations"
    let body = {
      "prompt": prompt,
      "n": 1,
      "size": "1024x1024"
    }
    // let response = axios.post(url, body, {"headers": headers })
    //   .then(res => console.log(res.data))
  }, [])
  return (
    <div className="App">
      <div style={{border: "4px solid red"}}>
        <h1>Create Cool Images</h1>
      </div>
      <header className="App-header">
        <h3>Type Something in...</h3>
        <Form.Control onChange={(event) =>{
          setPrompt(event.target.value)
        }} style={{maxWidth: "40%", marginTop: "5%"}}/>
        <Button onClick={() => {
              let API_KEY = "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"
              let headers = {
                "Authorization": "Bearer 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",
              }
              let url = "https://api.openai.com/v1/images/generations"
              let body = {
                "prompt": prompt,
                "n": 1,
                "size": "1024x1024"
              }
              let response = axios.post(url, body, {"headers": headers })
                .then(res => {
                  console.log(res.data.data)
                  setImage(res.data.data[0].url)
                })
        }}  style={{marginTop: "5%"}} >Create</Button>
        <img src={image}/>
      </header>
    </div>
  );
}

export default App;
