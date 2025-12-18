import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/auth/authThunks";
import { logout } from "../redux/auth/authSlice";
import { fetchUserInfo, updateUserInfo } from "../redux/user/userThunks";
import { clearUser } from "../redux/user/userSlice";

export default function useAuth() {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const authError = useSelector((state) => state.auth.error?.message);
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
		dispatch(clearUser());
	};

	const editUser = async (userName) => {
		const result = await dispatch(updateUserInfo({ userName }));

		return updateUserInfo.fulfilled.match(result);
	};

	return { isAuthenticated, authError, user, loginUser, logoutUser, editUser };
}
