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
                <div className="col-span-6 md:px-10 pt-10 pb-8 shadow md:mx-28 px-2 mx-1">
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

                            <div className="flex items-center gap-5 md:gap-10  justify-center">

                                {/* google */}
                                <div className="px-6 md:px-8 py-3 rounded border-2 border-red-500 flex items-center gap-3 cursor-pointer">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" /><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" /><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" /><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" /></svg></span>
                                    <span className="font-semibold text-red-500">Google</span>
                                </div>

                                {/* Github */}
                                <div className="px-6 md:px-8 py-3 rounded border-2 border-black flex items-center gap-3 cursor-pointer">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60" /><path fill="#161614" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.212-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.688 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30ZM65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508Zm4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078Zm3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406Zm5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555Zm7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048Zm8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459Zm8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097Z" /></g></svg></span>
                                    <span className="font-semibold">Github</span>
                                </div>

                            </div>
                        </div>





                    </div>


                </div>
                {/* form */}

            </div>
        </div>
    );
};

export default RegisterPage;