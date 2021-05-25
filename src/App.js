import './App.css';
import LeftPanel from './containers/LeftPanel';
import MainPanel from './containers/MainPanel';
import RightPanel from './containers/RightPanel';

function App() {
  const players = [
    {
    playerName: "Benjamin",
    playerImg: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
    },
    {
    playerName: "Michelle",
    playerImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    }
    ]
  return (
    <div id="app-container">
      <LeftPanel/>
      <MainPanel players={players}/>
      <RightPanel players={players}/>
      <div className="circle-graphic"></div>
    </div>
  );
}

export default App;
