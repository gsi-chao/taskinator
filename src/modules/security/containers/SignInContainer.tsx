import { SignIn } from "@clerk/clerk-react";

const SignInContainer = () => {
  return (
    <div className="h-screen w-screen grid place-content-center bg-gradient-to-tl from-slate-300 to-white">
      <SignIn path="/sign-in"/>
    </div>
  );
};

export default SignInContainer;
