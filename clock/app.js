const getCurrentTime = () => {
    const time = new Date();

    const currentSeconds = time.getSeconds();
    const currentMinutes = time.getMinutes();
    const currentHours = time.getHours();

    return {
        currentSeconds,
        currentMinutes,
        currentHours,
    }
}

const parseTime = (
    currentSeconds,
    currentMinutes,
    currentHours,
) => {
    const selectedTimeFormat = document.querySelector(`input[name="time_format"]:checked`).value;
    let session = (selectedTimeFormat === "12h") ? "AM" : "";

    if (selectedTimeFormat === "12h") {
        if (currentHours === 0) {
            currentHours = 12;
        }
        if (currentHours > 12) {
            currentHours = currentHours - 12;
            session = "PM";
        }
    }
    currentHours = (currentHours < 10) ? "0" + currentHours : currentHours;
    currentMinutes = (currentMinutes < 10) ? "0" + currentMinutes : currentMinutes;
    currentSeconds = (currentSeconds < 10) ? "0" + currentSeconds : currentSeconds;
    return {
        session,
        currentSeconds,
        currentMinutes,
        currentHours
    }
}

const renderTime = (
    currentSeconds,
    currentMinutes,
    currentHours,
    session
) => {
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


const main = () => {
    setInterval(() => { updateTime() }, 1000);
}

main();

