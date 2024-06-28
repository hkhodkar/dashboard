import { Link } from "react-router-dom";
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { ChangeEvent, FormEvent, useState } from "react";
import { Input, Checkbox, Button } from "@hatef_khodkar/storybook";

import { InputType } from "./input.type";
import ThemeSwitcher from "../theme/ThemeSwitcher";

function Register() {
  const [passwordInputType, setPasswordInputType] = useState(
    InputType.password
  );
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [registerState, setRegisterState] = useState({
    username: "",
    password: "",
    email: "",
  });

  function handleShowPassword(): void {
    setPasswordInputType((type) =>
      type === InputType.text ? InputType.password : InputType.text
    );
  }

  function registerStateHandler(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.name);
    setRegisterState((state) => {
      return {
        ...state,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(registerState);
  }

  function handleAcceptTerms() {
    setAcceptTerms((checked) => !checked);
  }

  return (
    <div className="min-w-screen min-h-screen bg-primary dark:bg-dark-primary flex justify-center items-center">
      <div className="w-[350px] dark:text-white text-neutral  p-2">
        <div className="bg-white dark:bg-neutral p-4 rounded-md">
          <div className="flex justify-between items-center">
            <ThemeSwitcher />
          </div>
          <h2 className="text-xl mb- text-center font-bold">Register</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-12  mb-3">
              <Input
                required
                label="Username"
                id="Username"
                name="username"
                onChange={registerStateHandler}
                value={registerState.username}
              />
              <Input
                required
                type="email"
                label="Email"
                id="Email"
                name="email"
                onChange={registerStateHandler}
                value={registerState.email}
              />
              <Input
                required
                type={passwordInputType}
                onChange={registerStateHandler}
                name="password"
                hasSuffix
                value={registerState.password}
                inputSuffix={
                  passwordInputType === InputType.text ? (
                    <IoEyeOff
                      className="cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <IoEyeSharp
                      className="cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  )
                }
                label="Password"
                id="Password"
              />
              <Checkbox
                checked={acceptTerms}
                onChange={handleAcceptTerms}
                required
                label="I agree to privacy policy & terms"
              />
              <Button isDisabled={!acceptTerms} variant="accent" type="submit">
                Sign Up
              </Button>
            </div>

            <div>
              <p className="flex items-center mb-3 gap-3 justify-center">
                Already an have account?{" "}
                <Link className="font-bold underline text-primary" to="/login">
                  SignIn
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

export default Register;
