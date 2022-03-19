import React from 'react'

import { HomeOutlined, DesktopOutlined, AppstoreOutlined, CommentOutlined } from '@ant-design/icons'


const Header = () => {
    return (
        <>
        <div className="navbar bg-base-100 hidden md:flex fade-in mx-8 w-fit">
            <a className="btn btn-ghost normal-case text-xl" href='/#home'>Home</a>
            {/* <a className="btn btn-ghost normal-case text-xl" href='/#work'>Work</a> */}
            <a className="btn btn-ghost normal-case text-xl" href='/#projects'>Projects</a>
            <a className="btn btn-ghost normal-case text-xl" href='/wishlist'>Wishlist</a>
            <a className="btn btn-ghost normal-case text-xl" href='/#contact'>Contact</a>
        </div>

        <ul className="flex flex-row bg-base-200 rounded-box p-2 mx-8 justify-center md:hidden">
            <a href="/#home"><HomeOutlined className="btn icon" /></a>
            {/* <a href="/#work"><DesktopOutlined className="btn icon" /></a> */}
            <a href="/#projects"><AppstoreOutlined className="btn icon" /></a>
            <a href="/#contact"><CommentOutlined className="btn icon" /></a>
        </ul>
        </>
    )
}

export default Header;