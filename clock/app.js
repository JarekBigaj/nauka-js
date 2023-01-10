const getCurrentTime = () =>{
    const time = new Date();
    
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();
    return {seconds,minutes,hours};
}

const parseSessionTimeFormat = (hours) => {
    const selectedTimeFormat = document.querySelector(`input[name="time_format"]:checked`).value;
    
    const timeFormat = "12h"

    const selectedTimeIs12hFormatSession = (selectedTimeFormat===timeFormat)? true:false;

    const sessionAM = "AM";
    const sessionPM = "PM";

    const session = (selectedTimeIs12hFormatSession) ? ((hours>12) ? sessionPM : sessionAM) : "";

    if(selectedTimeIs12hFormatSession){
        if(hours===0){
            hours=12;
        }
        if(hours>12){
            hours = hours-12;
        }
    }

    return {session,hours};
}

const parseCurrentTime = (getTime) => {    
    const parseSessionTime = parseSessionTimeFormat(getTime.hours);

    const session = parseSessionTime.session;
    const parseHours = parseSessionTime.hours;
    
    const currentHours = (parseHours<10) ? "0"+parseHours:parseHours;
    const currentMinutes = (getTime.minutes<10) ? "0"+getTime.minutes:getTime.minutes;
    const currentSeconds = (getTime.seconds<10) ? "0"+getTime.seconds:getTime.seconds;

    return {currentHours,currentMinutes,currentSeconds,session}
}

const showTime = ({currentSeconds,currentHours,currentMinutes,session}) =>{
    const timer = document.querySelector('[data-id="watch"]').textContent = `${currentHours} : ${currentMinutes} : ${currentSeconds} ${session}`;
    return timer;
}

const updateTime = () =>{
    const getTime = getCurrentTime();
    const parseTime = parseCurrentTime(getTime);
    const displayTime = showTime(parseTime);  
    return displayTime;
}


const main =() =>{
    setInterval(() => {updateTime()}, 1000);
}

main();

