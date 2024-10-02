import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
    const { status } = useSession();
    const router = useRouter();

    if (status === "authenticated") {
        router.push("/profile");
        return null;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Welcome Back
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Sign in to access your account
                </p>
                <button
                    className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white w-full px-4 py-3 rounded-md transition duration-300 ease-in-out"
                    onClick={() =>
                        signIn("google", {
                            callbackUrl: "/profile",
                        })
                    }
                >
                    <FaGoogle className="text-xl" />{" "}
                    <span className="font-semibold">Login with Google</span>
                </button>
            </div>
        </div>
    );
}
