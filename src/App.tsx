import React from 'react';
import Trello from "./page/Trello"
//import Banner from './components/Banner/Baner';
import "./App.css"

function App () {
  const [isToggleOn, setisToggleOn] = React.useState<boolean>(false)
  return (
      <div className="App">
        <Trello
          isToggleOn={isToggleOn}
          setisToggle={setisToggleOn}
        />
      </div>
  );
}

export default App;
