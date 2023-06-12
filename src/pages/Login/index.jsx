import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider";
import axios from "axios";
import { Button } from "flowbite-react";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, user, handleGoogleSignIn } = useContext(AuthContext);
  // console.log({ location });

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(location.state?.redirectTo || "/");
    }
  }, [user]);

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          ></Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <div className="flex justify-center">
                <img
                  className="h-40 "
                  src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1686565943~exp=1686566543~hmac=ddb5d718cd76b9f22fbda94a31e5e0f73e2b451b05fc8417f61cccbe82332c8a"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <Button type="submit">LOGIN</Button>
                </div>
              </form>

              <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <button
                  onClick={() => {
                    // e.preventDefault();
                    navigate("/register", {
                      state: { redirectTo: location?.state?.redirectTo },
                    });
                  }}
                >
                  <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign up
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
