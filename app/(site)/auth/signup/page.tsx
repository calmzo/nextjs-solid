import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " 注册页面 - Solid SaaS",

  // other metadata
  description: "注册页面"
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
