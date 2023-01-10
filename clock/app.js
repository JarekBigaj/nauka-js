const currentTime = () =>{
    const time = new Date();
    
    let currentSeconds = time.getSeconds();
    let currentMinutes = time.getMinutes();
    let currentHours = time.getHours();
    
    const selectedTimeFormat = document.querySelector(`input[name="time_format"]:checked`).value;
    let session = (selectedTimeFormat === "12h") ? "AM": "";

    if(selectedTimeFormat === "12h"){
        if(currentHours===0){
            currentHours=12;
        }
        if(currentHours>12){
            currentHours = currentHours-12;
            session = "PM";
        }
    }
    
    currentHours = (currentHours<10) ? "0"+currentHours:currentHours;
    currentMinutes = (currentMinutes<10) ? "0"+currentMinutes:currentMinutes;
    currentSeconds = (currentSeconds<10) ? "0"+currentSeconds:currentSeconds;

    document.querySelector('[data-id="watch"]').textContent = `${currentHours} : ${currentMinutes} : ${currentSeconds} ${session}`;
}

const updateTime = () => {
    const {
        currentSeconds,
        currentMinutes,
        currentHours,
    } = getCurrentTime();

    const {
        currentSeconds: parsedCurrentSeconds,
        currentMinutes: parsedCurrentMinutes,
        currentHours: parsedCurrentHours,
        session,
    } = parseTime(
        currentSeconds,
        currentMinutes,
        currentHours,
    )

    renderTime(
        parsedCurrentSeconds,
        parsedCurrentMinutes,
        parsedCurrentHours,
        session
    )

}


const main =() =>{
    setInterval(() => {currentTime()}, 1000);
}

main();

