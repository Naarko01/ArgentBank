import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, UserPage } from "../Pages";
import { Header, Footer } from "../Components";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./app.css";

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/user" element={<UserPage />} />
					</Routes>
					<Footer />
				</Router>
			</PersistGate>
		</Provider>
	);
}
