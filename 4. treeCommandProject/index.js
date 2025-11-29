let tree = `
project
├── README.md
├── index.html
├── assets
│   ├── images
│   │   ├── pic1.png
│   │   ├── pic2.jpg
│   │   ├── banner.png
│   │   ├── icons
│   │   │   ├── icon1.svg
│   │   │   ├── icon2.svg
│   │   │   └── icon3.svg
│   │   └── wallpapers
│   │       ├── wall1.jpg
│   │       ├── wall2.jpg
│   │       ├── wall3.jpg
│   │       ├── wall4.jpg
│   │       ├── wall5.jpg
│   │       └── wall6.jpg
│   ├── styles
│   │   ├── main.css
│   │   ├── colors.css
│   │   ├── layout.css
│   │   └── themes
│   │       ├── light.css
│   │       ├── dark.css
│   │       ├── pink.css
│   │       └── neon.css
│   └── fonts
│       ├── Poppins-Regular.ttf
│       ├── Poppins-Bold.ttf
│       ├── Roboto-Regular.ttf
│       ├── Roboto-Bold.ttf
│       ├── Inter-Regular.ttf
│       ├── Inter-Medium.ttf
│       ├── Inter-Bold.ttf
│       ├── Montserrat-Regular.ttf
│       ├── Montserrat-Bold.ttf
│       ├── Lato-Regular.ttf
│       └── Lato-Bold.ttf
├── scripts
│   ├── app.js
│   ├── main.js
│   ├── utils
│   │   ├── fetcher.js
│   │   ├── formatter.js
│   │   ├── logger.js
│   │   ├── validator.js
│   │   └── helpers
│   │       ├── date.js
│   │       ├── number.js
│   │       ├── string.js
│   │       ├── array.js
│   │       └── object.js
│   └── components
│       ├── navbar.js
│       ├── footer.js
│       ├── sidebar.js
│       ├── card.js
│       ├── modal.js
│       └── button.js
└── tests
    ├── app.test.js
    ├── data.test.js
    ├── layout.test.js
    ├── page.test.js
    ├── style.test.js
    ├── script.test.js
    ├── api.test.js
    └── helper.test.js
`;
document.getElementById("header").textContent = `Linux Terminal`
document.getElementById("command").innerHTML = `
<label>
   joyboykoder@TorvaldsTaughtUs:~$ tree project
</label>`
document.getElementById("treeOutput").textContent = tree;






































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

