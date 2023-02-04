import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import CharlistData from "./CharlistData";
import Stats from "./Components/Stats";
import Equip from "./Components/Equip";
import Skills from "./Components/Skills";
import Spells from "./Components/Spells";
import History from "./Components/History";
import MainNav from "./Components/MainNav";
import IncDecInput from "./UI/IncDecInput";
import Aside from "./Components/Aside";


function App() {
  const charListData = new CharlistData();
  const charList = charListData.list;
  const evalList = charListData.evalValueList;
  const [location, setLocation] = useState("stats");


  return (
      <div className="App">
        <header className={"htmlHeader"}>
          <nav>
            <h3>Главная</h3>
            <h3>Персонаж</h3>
            <h3>Справочник</h3>
          </nav>
        </header>
        <div className={"middle"}>
          <Aside charList={charList} evalList={evalList}/>
          <main>
            <MainNav location={location} setLocation={setLocation}/>
            <div className={"main-information-block"}>
              {location === "stats" && <Stats charList={charList} evalList={evalList}/>}
              {location === "equip" && <Equip charList={charList}/>}
              {location === "skills" && <Skills charList={charList}/>}
              {location === "spells" && <Spells charList={charList}/>}
              {location === "history" && <History charList={charList}/>}
            </div>
          </main>
        </div>
        <footer>Footer</footer>
      </div>
  );
}

export default App;
