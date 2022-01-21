import './App.css';

import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';

function App() {
  return (
    <div className="app">
     
      {/* Sidebar */}
      <Sidebar />   
      
      {/* Feed */}
      <Feed />
      {/* Widgets */}
    </div>
  );
}

export default App;
