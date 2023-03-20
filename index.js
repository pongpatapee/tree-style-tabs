document.getElementById("newTab").addEventListener("click", () => {
    chrome.tabs.create({});
});


chrome.tabs.query({currentWindow: true}, (tabs) => {
    tabs.forEach((tab, index)=> {
        let tabdiv = document.createElement("div");
        tabdiv.innerText = tab.title;
        document.getElementById("currentWindowTabs").append(tabdiv);
    });

    console.log(tabs);
});
