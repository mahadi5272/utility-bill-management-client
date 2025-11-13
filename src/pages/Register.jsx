import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../routes/AuthProvider";
import {  Link } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Register = () => {
  const { signup, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    document.title = "SignUp | UBM System";
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    setPasswordError(""); // clear previous errors

    // Create user
    signup(email, password)
      .then((res) => {
        const user = res.user;
        // Update user profile
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("Registration successful!");
            navigate("/home"); // navigate to home page
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        toast.success("Login successful!");
        navigate("/home"); // navigate to home page
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Left side text */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6 text-gray-700">
            Create an account to manage your utility bills easily.
          </p>
        </div>

        {/* Right side form */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
              <button className="btn btn-neutral w-full mt-2">Register</button>
            </form>

            <p className="mt-2 text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>

            <div className="divider">OR</div>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
