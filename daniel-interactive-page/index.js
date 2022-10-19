let currentClock = 0;

const renderClock = () => {
    const clockNode = document.querySelector('[data-testid="clock"]');
    clockNode.textContent = `${`${(currentClock / 60).toFixed(0)}`.padStart(2, "0")}:${`${(currentClock % 60).toFixed(0)}`.padStart(2, "0")}`
}

const setup = () => {

    // document.getElementById("abc").onclick = () => {
    //     console.log(789)
    // }
    document.getElementById("abc").addEventListener("click", () => {
        currentClock += 60;
        renderClock()
    })

    setInterval(() => {
        currentClock += 1;
        renderClock()
    }, 1000)
}
setup()

