import './App.css';

function App() {
  return (
    <div id="app-container">
      <div className="left panel">
        <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zm-9-7v6h2v-6h-2z"/>
          </svg>
        </div>
        <div className="menu-icon active">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176z"/>
          </svg>
        </div>
        <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M13 10h7l-9 13v-9H4l9-13z"/>
          </svg>
        </div>
        <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
          </svg>
        </div>
        <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M5 11.1l2-2 5.5 5.5 3.5-3.5 3 3V5H5v6.1zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
          </svg>
        </div>
        <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z"/>
          </svg>
        </div>
        <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm-7 5H8v2H6v2h1.999L8 15h2l-.001-2H12v-2h-2V9zm8 4h-2v2h2v-2zm-2-4h-2v2h2V9z"/>
          </svg>
        </div>
      </div>
      <div className="main panel">
        <div className="message-history">
        <div className="message-block">
            <div className="message-avatar">
              <img alt="player2" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
            </div>
            <div className="message-content">
              <h3>Michelle</h3>
              <p>Message content is here Message content is here Message content is here Message content is here Message content is here Message content is here Message content is here Message content is here Message content is here</p>
            </div>
          </div>
          <div className="message-block">
            <div className="message-avatar">
              <img alt="Player1" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
            </div>
            <div className="message-content">
              <h3>Benjamin</h3>
              <p>Response message</p>
            </div>
          </div>
        </div>
        <div className="message-box">
          <div className="message-input">Message Input</div>
          <div className="message-send">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="right panel">
        <div className="player-card">
          <div className="player-badge">
            <div className="player-avatar">
              <img alt="player1" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
            </div>
            <div className="player-name">Benjamin</div>
          </div>
        </div>
        <div className="player-card">
          <div className="player-badge">
            <div className="player-avatar">
              <img alt="player2" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
            </div>
            <div className="player-name">Michelle</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
