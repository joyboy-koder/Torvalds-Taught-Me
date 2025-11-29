const terminalEl = document.getElementById('terminal-el');
const inputEl = document.getElementById('input-el');

const outputs = {
    "who": `kev      tty1         2025-11-03  18:42
root     pts/0        2025-11-03  19:01
denise   pts/1        2025-11-03  19:03`,

    "who -H": `NAME     LINE         TIME             COMMENT
kelvin   seat0        2025-11-03 19:22 (login screen)
denise   tty2         2025-11-03 19:22 (tty2)`,

    "who -b": `system boot  2025-11-03 19:21`,

    "who -q": `kev denise
# users=2`,

    "w": `19:07:55 up  2:25,  2 users,  load average: 0.10, 0.03, 0.01
USER     TTY      LOGIN@   IDLE   JCPU   PCPU  WHAT
kev      pts/0    19:01    00:02  0.03s  0.01s bash
denise   pts/1    19:03    00:00  0.04s  0.02s node app.js`,

    "help": `Available commands:
who, who -b, who -q, w, w -h, w -s, who -H, help
who --shows you who logged in your system or server
w --shows you who logged in your system or server and even what they are doing or did
who -b --time of last system boot
who -H --print line of column headings
who -q --all login names and number of users logged on
w -h --do not print header
w -s --short format`,

    "w -h":
`kev      pts/0    19:01    00:02  0.03s  0.01s bash
denise   pts/1    19:03    00:00  0.04s  0.02s node app.js`,

    "w -s": `19:07:55 up  2:25,  2 users,  load average: 0.10, 0.03, 0.01
USER     TTY      LOGIN@   IDLE     WHAT
kev      pts/0    19:01    00:02   bash
denise   pts/1    19:03    00:00   node app.js`,
};


inputEl.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const command = inputEl.value.trim();
        if (!command) return;

        //Display entered command
        const newLine = document.createElement("div");
        newLine.innerHTML = `<span class="prompt">joyboykoder@ubuntu:~$</span> <span class="command">${command}</span>`;
        terminalEl.insertBefore(newLine, inputEl.parentElement);

        //Show output
        const outputText = outputs[command] || `bash: ${command}: command not found`;
        const outputDiv = document.createElement("div");
        outputDiv.className = "output";
        outputDiv.textContent = outputText;
        terminalEl.insertBefore(outputDiv, inputEl.parentElement);

        //Reset input
        inputEl.value = "";
        window.scrollTo(0, document.body.scrollHeight);
    }
});


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