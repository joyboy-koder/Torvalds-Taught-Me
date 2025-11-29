let interval;

function startYes() {
    let word = document.getElementById("wordInput").value;
    let output = document.getElementById("output");

    interval = setInterval(() => {
        output.textContent += word + "\n";
    }, 100);
}

function stopYes() {
    clearInterval(interval);
    output.textContent = "";
}













// fade-in logo
const logo = document.getElementById('introLogo');
logo.classList.add('fade-in');

// After 2.5s, fade it out
setTimeout(() => {
    logo.classList.remove('fade-in');
    logo.classList.add('fade-out');
}, 2500);

// After 4.5s total, hide intro and show main
setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main').classList.remove('hidden');
}, 4500);
