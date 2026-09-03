'use client'
import { authClient } from "@/app/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const router=useRouter();

    const {
        data: session,
        isPending, // loading state
        error // error object 
    } = authClient.useSession()
    // console.log(session.user);
    const user = session?.user;

    const signout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    // Router.push("/sign-up"); // redirect to login page
                    router.refresh();
                },
            },
        });
    }

    return (

        <div>

            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <ul
                            className=" flex gap-5 ">
                            <li><Link href="/home">Home</Link></li>
                            <li><Link href={`/add-destination`}>Destination</Link></li>
                            <li><Link href={`/bookings`}>My Bookings</Link></li>
                            <li><Link href={`/admin`}>Admin</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Image src="/assets/Wanderlast.png" width={150} height={150} alt="logo"></Image>
                </div>
                <div className="navbar-end">
                    <ul
                        className=" flex gap-5">
                        <li><Link href={`profile`}>Profile</Link></li>
                        {
                            user ?
                                <>
                                    <Avatar>
                                        <Avatar.Image alt={user?.name[0]} src={user?.image} />
                                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                                    </Avatar>
                                    <button onClick={signout}>Logout</button>
                                </>
                                :
                                <>
                                    <li><Link href={`login`}>Login</Link></li>
                                    <li><Link href={`sign-up`}>Sign-Up</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;