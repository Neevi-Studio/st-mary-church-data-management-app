import Link from "next/link";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { SideBarContext } from "@/components/context/SideBarContextContext";


const Header = () => {

    const { isSideBarOpen, toggled, setToggled, SetSideBar, broken } = useContext(SideBarContext)

    return (
        <header className="sticky top-0 z-[20] flex w-full bg-white drop-shadow-1 border-b ">
            <div className="flex  flex-grow items-center justify-between px-4 py-8 shadow-2 md:px-6 2xl:px-11">
                {broken &&
                    <div className="flex items-center gap-2 sm:gap-4 ">
                        <button
                            aria-controls="sidebar"
                            onClick={(e) => {
                                e.stopPropagation();
                                setToggled(!toggled);
                            }}
                            className=" block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden"
                        >
                            <span className="relative block h-5.5 w-5.5 cursor-pointer">
                                <span className="du-block absolute right-0 h-full w-full">
                                    <span
                                        className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!isSideBarOpen && "!w-full delay-300"
                                            }`}
                                    ></span>
                                    <span
                                        className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!isSideBarOpen && "delay-400 !w-full"
                                            }`}
                                    ></span>
                                    <span
                                        className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!isSideBarOpen && "!w-full delay-500"
                                            }`}
                                    ></span>
                                </span>
                                <span className="absolute right-0 h-full w-full rotate-45">
                                    <span
                                        className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!isSideBarOpen && "!h-0 !delay-[0]"
                                            }`}
                                    ></span>
                                    <span
                                        className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!isSideBarOpen && "!h-0 !delay-200"
                                            }`}
                                    ></span>
                                </span>
                            </span>
                        </button>
                        {/* <!-- Hamburger Toggle BTN --> */}

                        <Link className="block flex-shrink-0 lg:hidden" href="/">
                            <Image
                                width={32}
                                height={32}
                                src="/images/logo/logo-icon.svg"
                                alt="Logo"
                            />
                        </Link>



                    </div>
                }
                <div className="flex flex-row gap-x-1 items-center">
                    <div className="flex flex-row gap-x-4 items-center">
                        {!broken &&
                            <button onClick={(e) => {
                                e.preventDefault()
                                SetSideBar(!isSideBarOpen)
                            }} >
                                <Image src="/menu.svg" alt="menu icon" width={25} height={25}
                                    style={{ minWidth: 25, minHeight: 25 }} />
                            </button>
                        }

                        {/* <p className="font-semibold text-xl" >{activeTabName}</p> */}

                    </div>
                </div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    {/* <ul className="md:flex hidden items-center gap-2 2xsm:gap-4">
                        <DropdownNotification />
                    </ul> */}

                    <DropdownUser />

                </div>
            </div >
        </header >
    );
};

export default Header;
