import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, UserPage } from "../Pages";
import { Header, Footer } from "../Components";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "./app.css";

export default function App() {
	return (
		<Provider store={store}>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/user" element={<UserPage />} />
				</Routes>
				<Footer />
			</Router>
		</Provider>
	);
}
