import Navbar from "@/components/NavBar";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import { loginUser } from "@/services/users/User";

export default function loginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function onSubmit(data) {
    setIsSubmitting(true);
    alert("is submiting");
    /*
    try {
      const token = await loginUser(data.email, data.password);
      if (token) {
        //alert("valid credential");
        localStorage.setItem("token", token.token);
        const user = await getUserById(token.id);
        localStorage.setItem("name", user.name);
        localStorage.setItem("profilePic", user.profilePic);
        localStorage.setItem("joinedAt", user.createAt);
        router.push("/");
        setIsSubmitting(false);
        return;
      }

      setError("root.data", { type: "manual", message: "Invalid credentials" });
      setIsSubmitting(false);
    } catch (error) {
      console.log("Error in login:", error);
      setIsSubmitting(false);
    }*/
  }

  return (
    <main>
      <Navbar></Navbar>
      <div className="h-screen bg-white">
        <div className="flex items-center justify-center h-full">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-1">
                <p className="w-full text-left font-semibold">Email</p>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className={clsx(
                    "w-full rounded-md border border-gray-200 p-2",
                    {
                      "bg-red-500/10 border-red-500": errors.email,
                    }
                  )}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <p className="w-full text-left font-semibold">Password</p>
                <input
                  type="password"
                  className={clsx(
                    "w-full rounded-md border border-gray-200 p-2",
                    {
                      "bg-red-500/10 border-red-500": errors.password,
                    }
                  )}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex flex-row justify-between py-2">
                <div className="flex flex-row gap-2">
                  <input type="checkbox" name="" id="" />
                  <p>Remember me</p>
                </div>
                <a href="">Forgot password?</a>
              </div>
              <button
                className={clsx(
                  "w-full rounded-md bg-blue-800/90 hover:bg-blue-800 p-2 text-white",
                  {
                    "bg-gray-300": isSubmitting,
                  }
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading ..." : "Login"}
              </button>
              {errors.root?.data && (
                <span className="p-2 rounded w-full bg-red-500/15 text-sm text-red-500">
                  {errors.root.data.message}
                </span>
              )}
              {errors.root?.data && (
                <span className="p-2 rounded w-full bg-red-500/15 text-sm text-red-500">
                  {errors.root.data.message}
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
