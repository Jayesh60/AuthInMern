import { Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from "./components/Main/Main";
import Signup from "./components/Singup/SignUp";
import Login from "./components/Login/Login";
import About from "./components/About/About";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user &&
			<>
				<Route path="/" exact element={<Main />} />
				{/* <Route path="/"  element={<Signup />} /> */}
				<Route path="/about"  element={<About />} />
			</>
			}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
