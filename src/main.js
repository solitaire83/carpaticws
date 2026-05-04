document.documentElement.innerHTML = "";

const iframe = document.createElement("iframe");
iframe.src = SAFE;
iframe.style.cssText = `
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border:none;
    z-index:2147483647;
`;

document.documentElement.appendChild(iframe);

document.title = TITLE;
