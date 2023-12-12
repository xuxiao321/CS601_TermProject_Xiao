function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    document.getElementById("current-time").innerText = timeString;
    setTimeout(updateTime, 1000); // Update the time every second
}

window.onload = updateTime; // Start the function when the page loads

document.addEventListener("DOMContentLoaded", function (event) {
    document.body.classList.add('fade-in');

    document.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            var newUrl = this.href;

            event.preventDefault();
            document.body.classList.add('fade-out');

            setTimeout(function () {
                window.location = newUrl;
            }, 500); // This timeout duration should match the CSS transition time
        });
    });
});
