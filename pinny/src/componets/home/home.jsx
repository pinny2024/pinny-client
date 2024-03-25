import React from "react";
import "../../css/comm/index.css"
import "../../css/home/home.css"
import Nav from '../../pages/nav'
import Calendar from "react-calendar";

const Home = () => {
    return (
        <div className="">
            <div className="top"> 
                수입지출기록
                <div className="use-money">
                    <Calendar />
                </div> 
                <div className="week-plan">
                    <div className="week-plan-name">
                        일주일 예산을<br />세워보세요!
                    </div>
                    <div className="week-plan-button">
                        <button>예산 세우기</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="career">
                
            </div>
            <div className="bottom-bar">
                <Nav />
            </div>

            
        </div>
    )
}

export default Home;