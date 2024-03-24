import React from "react";
import { Icon } from "@iconify/react";
import "../../css/comm/index.css"
import "../../css/comm/nav.css"

const Nav = () => {
    return (
        <div className="nav-container">
            <ul className="nav-list">
                <li className="nav-item">
                    <Icon className="nav-icon" icon="ant-design:home-filled" />
                    <div className="nav-label">홈</div>
                </li>
                <li className="nav-item">
                    <Icon className="nav-icon" icon="fa-solid:coins" />
                    <div className="nav-label">수입/지출</div>
                </li>
                <li className="nav-item">
                    <Icon className="nav-icon" icon="jam:write-f" />
                    <div className="nav-label">계획</div>
                </li>
                <li className="nav-item">
                    <img className="nav-icon" src="img/challenge.svg"></img>
                    <div className="nav-label">퀘스트</div>
                </li>
                <li className="nav-item">
                    <Icon className="nav-icon" icon="ph:user-fill" />
                    <div className="nav-label">마이페이지</div>
                </li>
            </ul>
        </div>
    )
}

export default Nav;