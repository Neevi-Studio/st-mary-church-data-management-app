import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { Sidebar, Menu, MenuItem, MenuItemStyles, menuClasses } from 'react-pro-sidebar';
import { LuHome, } from "react-icons/lu";
import { usePathname } from 'next/navigation';
// import { MdWallpaper } from "react-icons/md";
// import { AiFillProfile } from "react-icons/ai";
// import { TbCategoryFilled, TbPackages } from "react-icons/tb";
// import { BiSolidCoupon } from "react-icons/bi";
// import { RiEmojiStickerLine } from "react-icons/ri";
import { SideBarContext } from '@/components/context/SideBarContextContext';
import { MdFamilyRestroom, MdOutlineConfirmationNumber, MdOutlineControlPointDuplicate, MdPendingActions, MdWallpaper } from 'react-icons/md';
import { FaList } from "react-icons/fa";

function SideBar() {
    const { isSideBarOpen, toggled, setToggled, setBroken, SetSideBar, broken } = useContext(SideBarContext)

    const pathname = usePathname();

    const themeColors = {
        sidebar: {
            backgroundColor: '#ffffff',
            color: '#607489',
        },
        menu: {
            menuContent: '#fbfcfd',
            icon: '#607489',
            // icon: '#155EEF',
            hover: {
                backgroundColor: '#66A3D0',
                color: '#fff',
            },
            disabled: {
                color: '#9fb6cf',
            },
        },
    };

    const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: '16px',
            fontWeight: 500,
        },
        icon: ({ active }) => ({
            color: active ? "#fff" : themeColors.menu.icon,
            [`&.${menuClasses.disabled}`]: {
                color: themeColors.menu.disabled.color,
            },

        }),
        SubMenuExpandIcon: {
            color: '#000',
        },
        subMenuContent: ({ level }) => ({
            backgroundColor:
                level === 0
                    ? hexToRgba(themeColors.menu.menuContent, !isSideBarOpen ? 1 : 1)
                    : 'transparent',
        }),
        button: ({ active }) => ({
            [`&.${menuClasses.disabled}`]: {
                color: themeColors.menu.disabled.color,
            },
            backgroundColor: active ? themeColors.menu.hover.backgroundColor : 'transparent',
            color: active ? themeColors.menu.hover.color : themeColors.menu.icon,

            '&:hover': {
                backgroundColor: active ? themeColors.menu.hover.backgroundColor : "#c5e4ff",
            },

            '&:active': {
                backgroundColor: '#c5e4ff',
            },

        }),
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),

    };



    function closeSidebar() {
        if (toggled && broken) {
            setToggled(false)
        }
    }


    return (
        <Sidebar
            collapsed={isSideBarOpen}
            toggled={toggled}
            onBackdropClick={() => {
                SetSideBar(false)
                setToggled(false)
            }}
            onBreakPoint={setBroken}
            breakPoint="md"
            rootStyles={{
                color: themeColors.sidebar.color,
            }}
            backgroundColor={themeColors.sidebar.backgroundColor}
        >
            <Image
                src="/AppLogo.png"
                width={150}
                className='mb-8 p-6 self-center mx-auto'
                height={150}
                alt="logo"
            />

            <Menu menuItemStyles={menuItemStyles}>

                <MenuItem
                    icon={<FaList size={25} />}
                    onClick={closeSidebar}
                    active={pathname === `/dashboard`}
                    component={<Link href={`/dashboard`} />} >
                    Pending Families
                </MenuItem>
                <MenuItem
                    icon={<MdPendingActions size={25} />}
                    onClick={closeSidebar}
                    active={pathname === `/dashboard/semi-confirmed-families`}
                    component={<Link href={`/dashboard/semi-confirmed-families`} />} >
                    Semi Confiremd
                </MenuItem>
                <MenuItem
                    icon={<MdFamilyRestroom size={25} />}
                    onClick={closeSidebar}
                    active={pathname === `/dashboard/confirmed`}
                    component={<Link href={`/dashboard/confirmed`} />} >
                    Confirmed Families
                </MenuItem>
                <MenuItem
                    icon={<MdOutlineControlPointDuplicate size={25} />}
                    onClick={closeSidebar}
                    active={pathname === `/dashboard/duplicate-users`}
                    component={<Link href={`/dashboard/duplicate-users`} />} >
                    Duplicate users
                </MenuItem>
                {/* 
                <MenuItem
                    icon={<MdWallpaper size={25} />}
                    onClick={closeSidebar}
                    active={pathname === `/dashboard/banners`}
                    component={<Link href={`/dashboard/banners`} />} >
                    Banners
                </MenuItem>

                <MenuItem
                    icon={<AiFillProfile size={25} />}
                    onClick={closeSidebar}
                    active={pathname === `/dashboard/categoryTypes`}
                    component={<Link href={`/dashboard/categoryTypes`} />} >
                    Category types
                </MenuItem>

                <MenuItem
                    icon={<TbCategoryFilled size={25} />}
                    onClick={closeSidebar}
                    active={pathname === `/dashboard/categories`}
                    component={<Link href={`/dashboard/categories`} />} >
                    Categories
                </MenuItem>

                <MenuItem
                    icon={<BiSolidCoupon size={25} />}
                    onClick={closeSidebar}
                    active={pathname === `/dashboard/coupons`}
                    component={<Link href={`/dashboard/coupons`} />} >
                    Coupons
                </MenuItem>

                <MenuItem
                    icon={<TbPackages size={25} />}
                    onClick={closeSidebar}
                    active={pathname === `/dashboard/packages`}
                    component={<Link href={`/dashboard/packages`} />} >
                    Packages
                </MenuItem>

                <MenuItem
                    icon={<RiEmojiStickerLine size={25} />}
                    onClick={closeSidebar}
                    active={pathname === `/dashboard/stickers`}
                    component={<Link href={`/dashboard/stickers`} />} >
                    Stickers
                </MenuItem> */}


            </Menu>
        </Sidebar>
    )
}

export default SideBar