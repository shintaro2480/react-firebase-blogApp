import React from 'react'
import {Link} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
    <Link to="/">ホーム</Link>
    <Link to="/createpost">記事投稿</Link>
    <Link to="/login">新規投稿</Link>
    </nav>
  )
}

export default NavBar;
