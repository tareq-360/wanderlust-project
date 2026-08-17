import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
                        <li><Link href={`login`}>Login</Link></li>
                        <li><Link href={`signup`}>Sign-Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;