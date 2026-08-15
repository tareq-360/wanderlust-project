import Image from "next/image";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <ul
                            className=" flex gap-5 ">
                            <li><a>Home</a></li>
                            <li><a>Destination</a></li>
                            <li><a>My Bookings</a></li>
                            <li><a>Admin</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Image src="/assets/Wanderlast.png" width={150} height={150} alt="logo"></Image>
                </div>
                <div className="navbar-end">
                    <ul
                        className=" flex gap-5">
                        <li><a>Profile</a></li>
                        <li><a>Login</a></li>
                        <li><a>Sign-Up</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;