// 4)создаеи класс для модального окна под названием Modal.
export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    if (!this.modal) {
      console.error(`Модальное окно "${modalId}" не найдено.`);
      return;
    }
    this.initCloseListener();

    const checkBtn = document.createElement('button');
    checkBtn.innerText = 'Проверить состояние модального окна';

    checkBtn.style.margin = '10px';
    checkBtn.style.padding = '6px 10px';
    checkBtn.style.cursor = 'pointer';

    checkBtn.addEventListener('click', () => {
      const isOpen = this.modal.classList.contains('modal-showed');
      if (isOpen) {
        console.log('Модальное окно открыто');
      } else {
        console.log('Модальное окно закрыто');
      }
    });

    document.body.prepend(checkBtn);
  }

  open() {
    this.modal.classList.add('modal-showed');
    document.getElementById('overlay')?.classList.add('modal-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
    document.getElementById('overlay')?.classList.remove('modal-showed');
  }

  initCloseListener() {
    const closeBtn = this.modal.querySelector('[class="modal-close"]');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
  }
}