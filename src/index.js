import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Juice from "./Juice.png";
import Chips from "./Chips.png";
import Pizza from "./Pizza.png";

var juiceIndex=2;
var chipsIndex=2;
var pizzaIndex=2;

function App() {
  const [nameoftheclass, setname] = useState("Bottom");
  const[glassopen,setglass]=useState("glass");
  const [pizzas, setPizzas] = useState(Array(3).fill("image"));
  const [juices, setJuices] = useState(Array(3).fill("image"));
  const [chips, setChips] = useState(Array(3).fill("image"));
    
 const handleChips = () => {
    if(chipsIndex>-1){
      setglass((newname) => {
        setTimeout(() => {
          setglass("glass");
        }, 1000); // 2000 milliseconds delay
        return "open";
    });
    setname((newname) => {
      setTimeout(() => {
          setname("Bottom");
      }, 1000); // 2000 milliseconds delay
      return "Result";
  });
      setChips(prevClasses => {
        const updatedClasses = [...prevClasses];
        updatedClasses[chipsIndex] = "overlay";
        chipsIndex--;
        return updatedClasses;
      });
    }
    else{
      alert('Chips got Over');
    }
  };
  const handlePizza = () => {
    if(pizzaIndex>-1){
      setglass((newname) => {
        setTimeout(() => {
          setglass("glass");
        }, 1000); // 2000 milliseconds delay
        return "open";
    });
    setname((newname) => {
      setTimeout(() => {
          setname("Bottom");
      }, 1000); // 2000 milliseconds delay
      return "Result";
  });
      setPizzas(prevClasses => {
        const updatedClasses = [...prevClasses];
        updatedClasses[pizzaIndex] = "overlay";
        pizzaIndex--;
        return updatedClasses;
      });
    }
    else{
      alert('Pizza got Over');
    }
  };
  const handleJuice = () => {
    if(juiceIndex>-1){
      setglass((newname) => {
        setTimeout(() => {
          setglass("glass");
        }, 1000); // 2000 milliseconds delay
        return "open";
    });
    setname((newname) => {
      setTimeout(() => {
          setname("Bottom");
      }, 1000); // 2000 milliseconds delay
      return "Result";
  });
      setJuices(prevClasses => {
        const updatedClasses = [...prevClasses];
        updatedClasses[juiceIndex] = "overlay";
        juiceIndex--;
        return updatedClasses;
      });
    }
    else{
      alert('Juice got Over');
    }
  };
  return (
    <div class="Machine">
      <div className="Heading">
        <h1>Foods & Drinks</h1>
      </div>
      <div className="Body">
        <div className="Things">
          {juices.map((className, index) => (
          <img key={index} src={Juice} alt="Juice" className={className} style={{ left: `${index * 50}px` }}/>
        ))}
          <div className="Racks"></div>
            {chips.map((className, index) => (
          <img key={index} src={Chips} alt="Chips" className={className} style={{ left: `${index * 50}px` }}/>
        ))}
          <div className="Racks"></div>
          {pizzas.map((className, index) => (
            <img key={index} src={Pizza} alt="Pizza" className={className} style={{ left: `${index * 50}px` }}/>
          ))}          
          <div className="Racks"></div>
          <div className ={glassopen}>
          </div>
        </div>
        <div className="buttons">
        <button type="button" onClick={handleJuice}>Juice</button>
        <button type="button" onClick={handleChips}>Chips</button>
        <button type="button" onClick={handlePizza}>Pizza</button>
        </div>
      </div>
      <div className={nameoftheclass}>
        <h1>Take Here</h1>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
