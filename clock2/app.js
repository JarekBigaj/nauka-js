let time = {
    seconds:0,
    minutes:0,
    hours:0
}

const incrementSeconds = (seconds) => seconds+1;

const timer = (time) =>{
    let {seconds,minutes,hours} = time;
    seconds = 1;
    console.log(seconds);
    return {seconds,minutes,hours};
}

const main =() =>{
    setInterval(() => {time = timer(time)}, 1000);
}

main();

