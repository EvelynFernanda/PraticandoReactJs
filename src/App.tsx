import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  let name = "Evelyn";
  const [age, setAge] = useState(90);
  const [bg, setBg] = useState("#196c2e");

  const handle20 = () => {
    setAge(20);
    setBg("#238636")
  };
  const handle90 = () => {
    setAge(90);
    setBg("#196c2e")

  };
  const list = [
    "Luna linda",
    "Luna feia",
    "Luna chata",
    "Luna doida",
    "Luna folgada",
  ]
  return (
    <div style={{ backgroundColor: bg }}>
      <Header name={name} age={age} />

      {age == 90 && <button onClick={handle20}> Tenho 20 anos</button>}
      {age == 20 && <button onClick={handle90}> Tenho 90 anos</button>}

      <ul>

        {list.map((frase, index) => (
          <li key={index}> {frase}</li>
        ))}
      </ul>



      <Footer />
    </div>
  );
};

export default App;
