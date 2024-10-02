import { signOut, useSession } from "next-auth/react";

export default function Profile() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Profile</h1>
                    <p className="mb-4">
                        Signed in as{" "}
                        <span className="font-semibold">
                            {session?.user?.email}
                        </span>
                    </p>
                    <button
                        onClick={() => signOut()}
                        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                        Sign out
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-xl font-semibold">Not signed in</p>
            </div>
        </div>
    );
}
