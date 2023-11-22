import SocialSignIn from "@/Components/SocailSignIn/SocialSignIn";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
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

                        <form>
                            {/* Email */}
                            <label htmlFor="Email Address" className="font-medium">Email Address</label> <br />
                            <input type="text" name="email" className="mt-2 md:ml-1 mb-5 w-full px-5 py-3 rounded-md border-2 focus:outline-none" placeholder="your@example.com" />

                            <br />

                            {/* Password */}
                            <label htmlFor="Password" className="font-medium flex justify-between">
                                <span>Password </span>
                                <span className="text-purple-500 underline text-sm cursor-pointer md:ml-64 ">Forget Password? </span>

                            </label>
                            <input type="password" name="password" className=" mt-2 md:ml-1 w-full  px-5 py-3 rounded-md border-2 focus:outline-none" placeholder="Enter 6 Character and more " />

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
                    ></Image>
                </div>
                {/* img */}

            </div>
        </div>
    );
};

export default LoginPage;