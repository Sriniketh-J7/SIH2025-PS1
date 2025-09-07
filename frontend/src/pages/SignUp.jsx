import { Heading } from "../Components/Heading"
import { SubHeading } from "../Components/SubHeading"
import { InputBox } from "../Components/InputBox"
import { Button } from "../Components/Button"
export const SignUp = () => {
    return (
        <>
            <div className="h-screen bg-slate-300 flex justify-center items-center ">
                <div className="w-[30%] h-[70%] bg-white rounded-xl px-5 py-5">
                    <Heading label="Sign Up" ></Heading>
                    <SubHeading label="Enter your information to create an account"></SubHeading>
                    <InputBox label="First Name" label2="nathan"></InputBox>
                    <InputBox label="Last Name" label2="raw"></InputBox>
                    <InputBox label="Email" label2="nathanraw@gmail.com"></InputBox>
                    <Button label="Sign Up"></Button>
                </div>
            </div>

        </>
    )
}
