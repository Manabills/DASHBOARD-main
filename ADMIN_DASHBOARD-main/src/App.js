import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login";

import User from "./pages/User";
import Users from "./pages/Users";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="users" element={ <Users/> } />
        <Route path="users/user" element={ <User/> } />
      </Routes>
    </div>
  );
}

export default App;
