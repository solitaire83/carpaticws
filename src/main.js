chrome.storage.local.get(["SAFE", "TITLE", "MSG"], ({ SAFE, TITLE, MSG }) => {
  document.documentElement.innerHTML = "";

  const iframe = document.createElement("iframe");
  iframe.src = SAFE;
  iframe.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    z-index: 2147483647;
  `;

  document.documentElement.appendChild(iframe);

  document.title = TITLE;

  console.log(`%c ${MSG} `, 
    `
    background: #1a1a2e; 
    color: #ff4655; 
    font-weight: bold; 
    font-size: 12px; 
    padding: 4px 8px; 
    border-left: 3px solid #ff4655;
  `);
});
