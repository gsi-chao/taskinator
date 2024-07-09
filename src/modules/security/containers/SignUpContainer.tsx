import { SignUp } from "@clerk/clerk-react";

const SignUpContainer = () => {
  return (
    <div className="h-screen w-screen grid place-content-center bg-gradient-to-tl from-slate-300 to-white">
      <SignUp path="/sign-up"/>
    </div>
  );
};

export default SignUpContainer;
