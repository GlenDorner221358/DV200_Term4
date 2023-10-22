import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import Profile from "./pages/profile";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5001/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			sessionStorage.setItem("username", data.email)
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	const handleDeleteAccount = async () => {
		try {
		  const userMail = sessionStorage.getItem("username");
		  const url = `http://localhost:5001/api/users/${userMail}`; // Replace with your API endpoint for deleting a user
		  const response = await axios.delete(url);
		  // Handle successful deletion
		  console.log("User deleted successfully");
		} catch (error) {
		  // Handle error
		  console.log(error);
		}
	  };

	//   const handleDeleteAccount = () => {
	// 	// Make a DELETE request to delete the user account
	// 	axios.delete("http://localhost:5001/api/auth/delete")
	// 	.then((response) => {
	// 	// Handle successful deletion
	// 	console.log("User account deleted successfully");
	// 	// Redirect the user to the login page or perform any other necessary action
	// 	})
	// 	.catch((error) => {
	// 	// Handle error
	// 	console.log(error);
	// 	});
	// 	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
					<div className={styles.logo}></div>
						<h1 className={styles.login_text}>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Log In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
