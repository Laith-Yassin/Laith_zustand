import TodoPage from "./components/TodoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";


export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo" element={<TodoPage/>}>
            <Route path="edit" element={<p>Edit component </p>}/>
          </Route>
        </Routes>
      </Router>
  );
}
