// This file contains the JavaScript code for the chat box functionality.

document.addEventListener("DOMContentLoaded", function() {
    // Chat box
    const chatBox = document.createElement("div");
    chatBox.id = "chatBox";
    chatBox.innerHTML = `
        <div id="chatHeader">
            Chat
            <span id="chatCloseBtn" title="Đóng" style="float:right;cursor:pointer;font-weight:bold;">&times;</span>
        </div>
        <iframe src="https://copilotstudio.microsoft.com/environments/Default-5f09d6d6-bce7-402d-8dca-2506dd4e011f/bots/crf35_agent1/webchat?__version__=2" frameborder="0" style="width: 100%; height: 300px;"></iframe>
    `;
    document.body.appendChild(chatBox);

    // Open button
    const openBtn = document.createElement("button");
    openBtn.id = "chatOpenBtn";
    openBtn.textContent = "AI";
    openBtn.title = "Mở chat";
    openBtn.style.display = "none";
    document.body.appendChild(openBtn);

    // Close chat box
    document.getElementById("chatCloseBtn").onclick = function() {
        chatBox.style.display = "none";
        openBtn.style.display = "block";
    };

    // Open chat box
    openBtn.onclick = function() {
        chatBox.style.display = "flex";
        openBtn.style.display = "none";
    };
});

// CSS for the chat box and open button
const style = document.createElement('style');
style.innerHTML = `
    #chatBox {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: white;
        display: none;
        flex-direction: column;
        z-index: 1000;
    }
    #chatHeader {
        background-color: #64c27d;
        color: white;
        padding: 10px;
        cursor: pointer;
        text-align: center;
        border-radius: 10px 10px 0 0;
        position: relative;
        user-select: none;
        font-size: 18px;
    }
    #chatCloseBtn {
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 20px;
        color: white;
    }
    #chatOpenBtn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1001;
        background-color: #64c27d;
        color: white;
        border: none;
        border-radius: 50px;
        padding: 12px 22px;
        font-size: 18px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        cursor: pointer;
    }
    #chatOpenBtn:hover {
        background-color: #57b76e;
    }
`;
document.head.appendChild(style);