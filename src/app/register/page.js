import SocialSignIn from "@/Components/SocailSignIn/SocialSignIn";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <div className="container mx-auto" >
            <div className="grid md:grid-cols-12 md:mt-10 items-center">

                {/* img */}
                <div className="hidden md:block col-span-6 ml-10">
                    <Image
                        src="https://img.freepik.com/premium-vector/online-registration-illustration-design-concept-websites-landing-pages-other_108061-939.jpg?w=740"
                        width="700"
                        height="700"
                        alt="login Img"
                    ></Image>
                </div>
                {/* img */}


                {/* form */}
                <div className="col-span-6 md:px-10 pt-10 pb-8 shadow-xl  md:mx-28 px-2 mx-1 rounded-md md:mb-5">
                    {/* title */}
                    <div>
                        <h2
                            className="text-2xl font-semibold text-center md:text-start">Sign Up</h2>
                        <p className="text-slate-600 text-sm mt-1 text-center md:text-start">Already have an account? <Link href='/login' className="font-bold text-base text-purple-500 underline">Login</Link></p>
                    </div>
                    {/* input */}
                    <div className="mt-5 md:mt-8">

                        <form>
                            {/* name */}
                            <label htmlFor="Name" className="font-medium">Name</label> <br />
                            <input type="text" name="name" className="mt-2 md:ml-1 mb-3 w-full px-5 py-3 rounded-md border-2 focus:outline-none" placeholder="Enter Name" />

                            <br />


                            {/* Email */}
                            <label htmlFor="Email Address" className="font-medium">Email Address</label> <br />
                            <input type="text" name="email" className="mt-2 md:ml-1 mb-3 w-full px-5 py-3 rounded-md border-2 focus:outline-none" placeholder="your@example.com" />

                            <br />

                            {/* Password */}
                            <label htmlFor="Password" className="font-medium">
                                <span>Password </span>
                            </label> <br />
                            <input type="password" name="password" className="mt-2 md:ml-1 w-full  px-5 py-3 mb-3 rounded-md border-2 focus:outline-none" placeholder="Enter 6 Character and more " />

                            {/* Image */}

                            <label htmlFor="Image URL" className="font-medium">
                                <span>Image URL </span>
                            </label> <br />
                            <input type="text" name="pictures" className="mt-2 md:ml-1 w-full  px-5 py-3 rounded-md border-2 focus:outline-none" placeholder="Provide Image URL " />

                            {/* button */}
                            <div>
                                <input type="submit" value='REGISTER' className="mt-8 w-full  px-5 py-3 rounded-md border-2 bg-purple-600 text-white cursor-pointer font-medium" />
                            </div>
                        </form>

                        {/* social Login */}
                        <div>
                            <p className="my-5 font-semibold text-center">OR Register With</p>

                            <SocialSignIn/>
                            </div>
                    </div>
                </div>
                {/* form */}
            </div>
        </div>
    );
};

export default RegisterPage;