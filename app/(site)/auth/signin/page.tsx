import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "登录页面 - Solid SaaS",

  // other metadata
  description: "登录页面"
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
