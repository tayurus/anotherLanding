$(document).ready(function() {
    // Set the date we're counting down to
    var countDownDate = new Date("Mar 20, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".timer__days").text(((days.toString().length == 1) ? "0" : "") + days.toString());
        $(".timer__hours").text(((hours.toString().length == 1) ? "0" : "") + hours.toString());
        $(".timer__minutes").text(((minutes.toString().length == 1) ? "0" : "") + minutes.toString());
        $(".timer__seconds").text(((seconds.toString().length == 1) ? "0" : "") + seconds.toString());

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            $(".timer__digits").empty();
            $(".timer__digits").css({
                "color": "#fff",
                "text-align": "center",
                "font-size": "20px"
            });
            $(".timer__digits").text("EXPIRED!");
        }
    }, 1000);
})
