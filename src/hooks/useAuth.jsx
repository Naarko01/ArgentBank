import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/auth/authThunks";
import { logout } from "../redux/auth/authSlice";
import { fetchUserInfo } from "../redux/user/userThunks";

export default function useAuth() {
	const dispatch = useDispatch();

	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const authError = useSelector((state) => state.auth.error);
	const user = useSelector((state) => state.user.info);

	const loginUser = async (email, password) => {
		const result = await dispatch(login({ email, password }));

		if (login.fulfilled.match(result)) {
			await dispatch(fetchUserInfo());
			return true;
		}
		return false;
	};

	const logoutUser = () => {
		dispatch(logout());
	};

	return { isAuthenticated, authError, user, loginUser, logoutUser };
}
