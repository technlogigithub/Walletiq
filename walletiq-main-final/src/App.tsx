import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./pages/Dashboard";
import Home from "./pages/LandingPage/Home";
import './App.css';
import Setting from './pages/Dashboard/Settings/Setting';
import Login from './pages/Dashboard/Login/Login';
import ResetPassword from './pages/Dashboard/resetPassword/ResetPassword';
import SignUp from './pages/Dashboard/SignUp/SignUp';

function App() {

	return (
		<div>
			<Router>
				<div>
					{/* Header or other common components can go here */}
					<Routes>
						{/* Define the routes */}
						<Route path="/" element={<Home />} />
						<Route path="/dashboard" element={<Index />} />
						<Route path="/setting" element={<Setting/>} />
						<Route path="/login" element={<Login/>} />
						<Route path="/reset-password" element={<ResetPassword/>} />
						<Route path="/sign-up" element={<SignUp/>} />
					</Routes>
					{/* Footer or other common components can go here */}
				</div>
			</Router>
		</div>
	);
}

export default App;
