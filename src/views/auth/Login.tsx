import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Input, Button } from "@hatef_khodkar/storybook";

import ThemeSwitcher from "../theme/ThemeSwitcher";

function Login() {
  return (
    <div className="min-w-screen min-h-screen bg-primary dark:bg-dark-primary flex justify-center items-center">
      <div className="w-[350px] dark:text-white text-neutral  p-2">
        <div className="bg-white dark:bg-neutral p-4 rounded-md">
          <div className="flex justify-between items-center">
            <ThemeSwitcher />
          </div>
          <h2 className="text-xl mb- text-center font-bold">Login</h2>
          <br />
          <form>
            <div className="flex flex-col w-full gap-12  mb-3">
              <Input label="Username" id="username" variant="primary" />
              <Input label="Password" id="Password" variant="primary" />
              <Button variant="accent">Login</Button>
            </div>

            <div>
              <p className="flex items-center mb-3 gap-3 justify-center">
                Don't have an account?
                <Link
                  className="font-bold underline text-primary"
                  to="/register"
                >
                  Sign Up
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-neutral dark:bg-dark-info h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-neutral dark:bg-dark-info h-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div className="w-full h-[35px] flex rounded-md bg-error dark:bg-dark-error text-white hover:bg-dark-error dark:hover:bg-error justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="w-full h-[35px] flex rounded-md bg-primary dark:bg-dark-primary dark:hover:bg-primary text-white hover:bg-dark-primary justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaFacebookF />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
