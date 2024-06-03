class Modal {
    constructor(id, headerText, bodyText, footerText) {
        this.id = id;
        this.headerText = headerText;
        this.bodyText = bodyText;
        this.footerText = footerText;
        this.modal = this.createModal();
        document.body.appendChild(this.modal);
        this.addEventListeners();
    }

    createModal() {
        const modal = document.createElement('div');
        modal.id = this.id;
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${this.headerText}</h2>
                <p>${this.bodyText}</p>
                <h3>${this.footerText}</h3>
            </div>
        `;
        return modal;
    }

    open() {
        this.modal.style.display = 'flex';
    }

    close() {
        this.modal.style.display = 'none';
    }

    addEventListeners() {
        const closeButton = this.modal.querySelector('.close');
        closeButton.addEventListener('click', () => this.close());

        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.close();
            }
        });
    }
}

const modal1 = new Modal('modal1', 'Modal Header', 'Some text in the Modal Body', 'Modal Footer');
const modal2 = new Modal('modal2', 'Modal Header', 'Some text in the Modal Body', 'Modal Footer');

document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        if (modalId === 'modal1') {
            modal1.open();
        } else if (modalId === 'modal2') {
            modal2.open();
        }
    });
});
