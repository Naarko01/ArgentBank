import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, UserPage } from "./Pages";
import { Header, Footer } from "./Components";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Header />
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/user" element={<UserPage />} />
			</Routes>
		</Router>
		<Footer />
	</StrictMode>
);
