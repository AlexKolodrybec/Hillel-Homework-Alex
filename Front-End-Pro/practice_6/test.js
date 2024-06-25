class FormValidator {
    static SUCCESS_CLASS_NAME = 'success';
    static ERROR_CLASS_NAME = 'error';
    static ERROR_ITEM_CLASS_NAME = 'error__item';
    static FORM_CONTROL_CLASS_NAME = 'form-group';
  
    constructor(form) {
      this.form = form;
      this.elements = form.elements;
      this.send = null;
      this.initialize();
    }
  
    initialize() {
      this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.checkForm();
    }
  
    checkForm() {
      let isValid = true;
      for (const element of this.elements) {
        if (!this.checkFormElement(element)) {
          isValid = false;
        }
      }
      if (isValid) {
        this.form.submit();
      }
    }
  
    checkFormElement(element) {
      const validityState = element.validity;
      if (validityState.valid) {
        this.clearError(element);
        return true;
      } else {
        let message = '';
        if (validityState.valueMissing) {
          message = 'Поле обов\'язкове для заповнення';
        } else if (validityState.tooShort) {
          message = `Мінімальна довжина ${element.minLength} символів`;
        } else if (validityState.typeMismatch && element.type === 'email') {
          message = 'Невірний формат електронної пошти';
        }
        this.showError(element, message);
        return false;
      }
    }
  
    showError(element, message) {
      let errorElement = element.parentNode.querySelector(`.${FormValidator.ERROR_ITEM_CLASS_NAME}`);
      if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = FormValidator.ERROR_ITEM_CLASS_NAME;
        element.parentNode.appendChild(errorElement);
      }
      errorElement.textContent = message;
      element.classList.add(FormValidator.ERROR_CLASS_NAME);
    }
  
    clearError(element) {
      const errorElement = element.parentNode.querySelector(`.${FormValidator.ERROR_ITEM_CLASS_NAME}`);
      if (errorElement) {
        errorElement.remove();
      }
      element.classList.remove(FormValidator.ERROR_CLASS_NAME);
    }
  }
  
  const formElement = document.querySelector('form');
  if (formElement) {
    new FormValidator(formElement);
  }
  