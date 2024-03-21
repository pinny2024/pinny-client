import React from "react";
import { Icon } from "@iconify/react";
import "../../css/comm/nav.css"

const Nav = () => {
    return(
        <div className="nav-container">
            <ul>
                <li><Icon icon="ant-design:home-filled" /></li>
                <li><Icon icon="fa-solid:coins"/></li>
                <li><Icon icon="jam:write-f"/></li>
                <li><img src="img/challenge.svg"></img></li>
                <li><Icon icon="ph:user-fill"/></li>
            </ul>
        </div>
    )
}

export default Nav;