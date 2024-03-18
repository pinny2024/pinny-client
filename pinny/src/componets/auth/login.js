import React from "react";
import "../../css/login.css"
import "../../css/index.css"

const Login = () => {
    return (
        <>
            <div className="login-text">
                <h1>돈 모으기를 시작해볼까요?</h1>
            </div>
            <div className="login-main">
                <input type="text" className="login-input-email" placeholder="이메일을 입력하세요"></input>
                <input type="text" className="login-input-password" placeholder="비밀번호를 입력해주세요"></input>
                <button type="submit" className="login-submit-btn">확인</button>
            </div>
        </>
    );
};

export default Login;