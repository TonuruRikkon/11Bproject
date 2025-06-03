/**
 * AI Chat Widget
 * Creates a floating AI chat button and chat box
 */

class AIChatWidget {
    constructor() {
        this.initElements();
        this.setupEventListeners();
        this.injectStyles();
    }

    initElements() {
        // Create chat box container
        this.chatBox = document.createElement('div');
        this.chatBox.id = 'chatBox';
        this.chatBox.innerHTML = `
            <div id="chatHeader">
                Trợ lý AI
                <span id="chatCloseBtn" title="Đóng">&times;</span>
            </div>
            <iframe src="https://copilotstudio.microsoft.com/environments/Default-5f09d6d6-bce7-402d-8dca-2506dd4e011f/bots/crf35_agent1/webchat?__version__=2" 
                    frameborder="0" 
                    style="width: 100%; height: 400px;">
            </iframe>
        `;
        
        // Create open button
        this.openBtn = document.createElement('button');
        this.openBtn.id = 'chatOpenBtn';
                this.chatBox.classList.add('minimized');

        // Append to body
        document.body.appendChild(this.chatBox);
        document.body.appendChild(this.openBtn);
    }

    setupEventListeners() {
        // Close chat box handler
        document.getElementById('chatCloseBtn').addEventListener('click', () => {
            this.hideChatBox();
        });

        // Open chat box handler
        this.openBtn.addEventListener('click', () => {
            this.showChatBox();
        });

        // Show open button after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.openBtn.style.display = 'flex';
            }, 1000);
        });
    }

    injectStyles() {
        // Link to external CSS file
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'chatboxCSS.css';
        document.head.appendChild(link);
    }

    showChatBox() {
        this.chatBox.classList.add('show');
        this.chatBox.classList.remove('minimized');
        this.openBtn.style.display = 'none';
    }

    hideChatBox() {
        this.chatBox.classList.add('minimized');
        this.openBtn.style.display = 'flex';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AIChatWidget();
});