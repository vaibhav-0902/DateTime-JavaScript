function currentTime() {
    setInterval(function currentTime() {

        let a = new Date();
        let hrs = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        let session = "AM";
    
        if (hrs == 0) {
            hrs = 12;
        }
        if (hrs > 12) {
            hrs = hrs - 12;
            session = "PM";
        }
    
        hrs = (hrs < 10) ? "0" + hrs : hrs;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
    
        let time = hrs + ":" + min + ":" + sec + " " + session;
    
        let date = a.toLocaleDateString(undefined, options);
        let t = setTimeout(function () { currentTime() }, 1000);
        document.getElementById("clock").innerHTML = time + "<br>" + date;
    });
}
currentTime();
