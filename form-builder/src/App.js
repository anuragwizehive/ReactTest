import "./App.css";
import Dashboard from "./routes/Dashboard";
import ViewAllData from "./routes/ViewAllData";
import { Route, Routes } from "react-router-dom";
import CreateForm from "./components/CreateForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="createForm" element={<CreateForm />} />
          <Route path="tasks" element={<ViewAllData />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
