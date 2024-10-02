import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    Welcome to Our App
                </h1>
                <p className="text-gray-600">This is the home page</p>
                <div className="mt-6 flex justify-start">
                    <Link
                        href="/login"
                        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center gap-2"
                    >
                        Get started <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
}
