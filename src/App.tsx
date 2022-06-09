import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Agents from './pages/Agents/index'
import AgentInfo from "./pages/AgentInfo/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/:id" element={<AgentInfo />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </div>
  );
}

export default App;
