import {Popup} from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _getInputValues() {
    
}
  setEventListeners() {
    super.setEventListeners();
    //передать значения импутов
}
  close() {
    super.close();
    //добавить сброс полей
  }
}