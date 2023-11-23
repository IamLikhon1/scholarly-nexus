'use client'
import SocialSignIn from "@/Components/SocailSignIn/SocialSignIn";
import { AuthContext } from "@/Components/Utilities/AuthProvider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useRef } from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

const LoginPage = () => {
    const {signInUsers,resSetPassword}=useContext(AuthContext);
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace } = useRouter();
    const emailRef = useRef();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInUsers(email,password)
        .then(result=>{
            const signIn=result.user;
            toast.success(`${signIn?.displayName} You Login successfully`);
            replace(from);
            reset();
        })
        .catch(error => {
            toast.error(error.message)
          })

      };

      const handleResetPassword = () => {
        const email = emailRef.current?.value;
        // console.log(email);
        if (!email) {
          toast.error("Provide your email.", {
            position: "top-center",
          });
          return;
        }
    
        // pass reset
        resSetPassword(email)
          .then(() => {
            toast.success("Check your email, please!");
          })
          .catch((err) => toast.error(err.message));
      };

    return (
        <div className="container mx-auto">
            <div className="grid md:grid-cols-12 md:mt-10 items-center">

                {/* form */}
                <div className="col-span-6 md:px-10 pt-10 pb-8 shadow-xl md:mx-28 px-2 mx-1 rounded-md">
                    {/* title */}
                    <div>
                        <h2
                            className="text-2xl font-semibold text-center md:text-start">Login</h2>
                        <p className="text-slate-600 text-sm mt-1 text-center md:text-start">{"Doesn't"} have any account yet? <Link href='/register' className="font-bold text-base text-purple-500 underline">Sign up</Link></p>
                    </div>
                    {/* input */}
                    <div className="mt-5 md:mt-8">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Email */}
                            <label htmlFor="Email Address" className="font-medium">Email Address</label> <br />
                            <input {...register("email", { required: true })} type="text" ref={emailRef}  name="email" className="mt-2 md:ml-1 mb-5 w-full px-5 py-3 rounded-md border-2 focus:outline-none" placeholder="your@example.com"
                             />

                            <br />

                            {/* Password */}
                            <label htmlFor="Password" className="font-medium flex justify-between">
                                <span>Password </span>
                                <button onClick={handleResetPassword} className="text-purple-500 underline text-sm cursor-pointer md:ml-64 ">Forget Password? </button>

                            </label>
                            <input {...register("password", { required: true })} type="password" name="password" className=" mt-2 md:ml-1 w-full  px-5 py-3 rounded-md border-2 focus:outline-none" placeholder="Enter 6 Character and more " />

                            {/* button */}
                            <div>
                                <input type="submit" value='LOGIN' className="mt-8 w-full  px-5 py-3 rounded-md border-2 bg-purple-600 text-white cursor-pointer font-medium" />
                            </div>
                        </form>

                        {/* social Login */}
                        <div>
                            <p className="my-5 font-semibold text-center">OR Login With</p>

                            <SocialSignIn/>
                        </div>
                    </div>
                </div>
                {/* form */}

                {/* img */}
                <div className="hidden md:block col-span-6">
                    <Image
                        src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?w=740&t=st=1700648476~exp=1700649076~hmac=28643caff113ed92d515fcfef405de4fab06230c82a6d5834c84c2fc66dc4f84"
                        width="600"
                        height="600"
                        alt="login Img"
                        priority={true}
                    ></Image>
                </div>
                {/* img */}

            </div>
        </div>
    );
};

export default LoginPage;