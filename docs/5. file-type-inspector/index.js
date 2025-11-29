document.getElementById("fileInput").addEventListener("change", function () {
    let file = this.files[0];
    let output = document.getElementById("output");

    output.textContent = `$ file ${file.name}\n`;
    output.textContent += `${file.name}: ${file.type || "Unknown type"}, ${file.size} bytes`;
});