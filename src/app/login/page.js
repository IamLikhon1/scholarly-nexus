import Link from "next/link";

const LoginPage = () => {
    return (
        <div >
            <div className="grid md:grid-cols-12 mx-auto">

                {/* form */}
                <div className="col-span-5">
                    {/* title */}
                    <div>
                        <h2 
                        className="text-2xl font-semibold">Login</h2>
                        <p className="text-base text-slate-600">{"Doesn't"} have any account yet? <Link href='/register' className="font-bold text-lg text-purple-500 underline">Sign up</Link></p>
                    </div>
                    {/* input */}
                    

                </div>
                {/* form */}

                {/* img */}
                <div className="col-span-7 bg-red-600">
                    img
                </div>
                {/* img */}

            </div>
        </div>
    );
};

export default LoginPage;