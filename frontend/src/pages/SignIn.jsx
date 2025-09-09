import { Button } from "../Components/SignUp/Button";
import { Heading } from "../Components/SignUp/Heading";
import { InputBox } from "../Components/SignUp/InputBox";
import { SubHeading } from "../Components/SignUp/SubHeading";

export const SignIn = () => {
  return (
    <div>
      <div className="h-screen bg-slate-300 flex justify-center items-center sm:flex justify-center items-center">
        <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/3 bg-white rounded-xl px-6 py-6 shadow-lg">
          <Heading label="Sign In"></Heading>
          <SubHeading label="Enter your information for sign in "></SubHeading>
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label="Username"
            label2="nathan"
          ></InputBox>
          <InputBox
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="password"
            label2="nathanraw"
          ></InputBox>
          <Button
            onClick={async () => {
              await axios.post("http://localhost/3000/api/user/login", {
                firstName,
                lastName,
                email,
              });
              navigate("/dashboard");
            }}
            label="Sign Up"
          ></Button>
        </div>
      </div>
    </div>
  );
};
