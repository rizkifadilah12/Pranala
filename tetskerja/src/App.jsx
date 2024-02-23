import {  useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [number, setNumber] = useState("")
  const [response, setResponse] = useState([])
  const testing = response
  console.log(response);
  const segitiga = async () => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/setiga', {
        number : number
      })
      setResponse(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const ganjil = async () => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/ganjil', {
        number : number
      })
      setResponse(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const genap = async () => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/genap', {
        number : number
      })
      setResponse(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <input 
    type="number" 
    value={number}
    onChange={(e) => setNumber(e.target.value)}
    /> <br /> <br />
    <form action="" onSubmit={segitiga}>
    <input type="submit" value="Generate Segitiga" />
    </form>
    <form onSubmit={ganjil}>
   <input type="submit" value="Generate bilangan ganjil" />
    </form>
    <form action="" onSubmit={genap}>
   <input type="submit" value="Generate bilangan prima" />
    </form>
   <br />
   <h1>Result : </h1> <br />
   <div style={{whiteSpace: "pre-wrap"}}>{response}</div>   
    </>
  )
}

export default App
