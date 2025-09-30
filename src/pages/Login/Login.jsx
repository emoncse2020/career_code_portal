import { Link } from "react-router";
import useInputField from "../../hooks/useInputField";
import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Login = () => {
  const { signInUser, setUser, setLoading, setError } = use(AuthContext);
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // const loginData = {
    //   email,
    //   password,
    // };

    // console.log("User Login Data:", loginData);
    signInUser(email, password)
      .then((currentUser) => {
        const user = currentUser.user;
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
      });
  };

  return (
    <div className=" max-w-6xl mx-auto my-12">
      <div className="flex justify-center">
        {/* Left Image Section */}
        <div
          className="hidden bg-cover md:block md:w-2/3 bg-center "
          //   style={{
          //     backgroundImage:
          //       "url('https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          //   }}
        >
          <div className="flex items-center h-full px-20">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Career Code </h2>
              <p className="max-w-xl mt-3">
                Access your account in just a few clicks. Enter your email and
                password to get started.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex items-center w-full  px-6 mx-auto md:w-3/6">
          <div className="flex-1">
            {/* Logo & Welcome */}
            <div className="text-center">
              {/* <div className="flex justify-center mx-auto">
                <img
                  className="w-auto h-7 sm:h-8"
                  src="https://merakiui.com/images/logo.svg"
                  alt="Logo"
                />
              </div> */}
              <div className="flex justify-center mx-auto">
                <h1>Welcome!!!</h1>
              </div>
              <p className="mt-3 ">Sign in to access your account</p>
            </div>

            {/* Form */}
            <div className="mt-8">
              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm ">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    value={email}
                    onChange={emailOnChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 
                    bg-white border border-gray-200 rounded-lg 
                    dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 
                    focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 
                    focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                {/* Password Input */}
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm ">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-600 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={passwordOnChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 
                    bg-white border border-gray-200 rounded-lg 
                    dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 
                    focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 
                    focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform 
                    bg-blue-500 rounded-lg hover:bg-blue-400 
                    focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              {/* Sign Up Link */}
              <p className="mt-6 text-sm text-center text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to={"/register"}
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
