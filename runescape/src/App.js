import React, {useEffect} from 'react';
import axios from "axios";

function App() {
  
  useEffect(() => {
    axios.get("https://cors-anywhere.herokuapp.com/http://services.runescape.com/m=website-data/playerDetails.ws?names=%5B%22touchlee%22%5D&callback=jQuery000000000000000_0000000000&_=0")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
