import { useState } from 'react';
import './App.css';

function App() {
    const [selectedAssign, setSelectedAssign] = useState(-1);
    const assignStart = [[8, 6], [8, 10]];
    const assignEnd = [[8, 8], [8, 11]];
    const assignList = ["과제1", "과제2"];

    const today = {
        year: new Date().getFullYear(), 
        month: new Date().getMonth() + 1, 
        date: new Date().getDate(), 
        day: new Date().getDay(), 
      };

    const [year, setYear] = useState(today.year);
    const [month, setMonth] = useState(today.month);

    function prev_mon() {
        if (month <= 1) setMonth(12);
        else setMonth(month-1);
    }
    function next_mon() {
        if (month >= 12) setMonth(1);
        else setMonth(month+1); 
    }

    const totalDate = new Date(year, month, 0).getDate();
    const prevTotalDate = new Date(year, month-1, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();
    const days = [];

    for (let i=prevTotalDate-firstDay+1; i<=prevTotalDate; i++) {
        const date = {
            day: i,
            selectedMon: false,
            selectedAssignDay: 0<=selectedAssign && (assignStart[selectedAssign][0] <= month && month-1 <= assignEnd[selectedAssign][0]) && (assignStart[selectedAssign][1] <= i && i <= assignEnd[selectedAssign][1]) ? true : false,
            // 0<=selectedAssign 이면 과제가 선택됨, selectedAssign은 과제리스트의 인덱스 역할, assignStart[0]은 월 [1]은 일
        }
        days.push(date);
    }
    for (let i=1; i<=totalDate; i++) {
        const date = {
            day: i,
            selectedMon: true,
            selectedAssignDay: 0<=selectedAssign && (assignStart[selectedAssign][0] <= month && month <= assignEnd[selectedAssign][0]) && (assignStart[selectedAssign][1] <= i && i <= assignEnd[selectedAssign][1]) ? true : false,
        }
        days.push(date);
    }
    for (let i=1; i<=42-(totalDate+firstDay); i++) {
        const date = {
            day: i,
            selectedMon: false,
            selectedAssignDay: 0<=selectedAssign && (assignStart[selectedAssign][0] <= month && month+1 <= assignEnd[selectedAssign][0]) && (assignStart[selectedAssign][1] <= i && i <= assignEnd[selectedAssign][1]) ? true : false,
        }
        days.push(date);
    }

    const [clickedDay, setClickedDay] = useState(-1);
    const [isShowSubmit, setIsShowSubmit] = useState("none");
    function ShowSubmit(e) {
        if (clickedDay === e.target.innerText) {
            setIsShowSubmit("fadeSubmit");
            setTimeout(() => setClickedDay(-1), 1000);
        }
        else {
            setClickedDay(e.target.innerText);
            setIsShowSubmit("showSubmit");
        }
    }

    function Submit({ day }) {
        return (
            <div className={"assign_submit " + isShowSubmit}>
                <div className="submit_content">
                    <h1>{day}</h1>
                    <form action="">
                        <input type="file"/>
                        <button type="submit">제출</button>
                    </form>
                </div>
            </div>
        );
    }

    function assignPeriod(e) {
        for (let i=0;i<assignList.length;i++) {
            if (e.target.innerText === assignList[i]) {
                if (selectedAssign === i) setSelectedAssign(-1);
                else setSelectedAssign(i);
            }
        } 
    }

    return (
        <div className="app">
            <div className="assign_list">
                <ul>
                    {assignList.map((title, index) => 
                        (<li onClick={assignPeriod} key={index}>{title}</li>))}
                </ul>
            </div>
            <div className="main">
                <div className={"main_cal " + (isShowSubmit === "none" ? null : (isShowSubmit === "showSubmit" ? "shiftL_cal" : "shiftR_cal"))}>
                    <div className="mon_cal">
                        <div onClick={prev_mon}>prev</div>
                        <p>{month}</p> 
                        <div onClick={next_mon}>next</div>
                    </div>
                    <div className="days_cal">
                        <div className="day">일</div>
                        <div className="day">월</div>
                        <div className="day">화</div>
                        <div className="day">수</div>
                        <div className="day">목</div>
                        <div className="day">금</div>
                        <div className="day">토</div>
                        {days.map((date, index) => (
                            <div className={"day " + 
                                (date.selectedMon ? "selectedMon " : "otherMon ") + 
                                (date.selectedAssignDay ? "selectedAssignDay" : "")} 
                                key={index}>
                                <a onClick={date.selectedMon ? ShowSubmit : null}>{date.day}</a>
                            </div>
                        ))}
                    </div>
                </div> 
            </div>
            {clickedDay>0 ? <Submit day={clickedDay} /> : null}
        </div>
    );
}

export default App;
