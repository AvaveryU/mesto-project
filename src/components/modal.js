//работа модальных окон
import {
  closePopup,
  openPopup,
  renderLoading,
  renderRemoving,
} from "./utils.js";
import {
  popupEdit,
  popupAvatar,
  jobInput,
  nameInput,
  avatarInput,
  profileName,
  profileDescrip,
  profileImage,
  formElementAvatar,
  buttonProfile,
  buttonAvatarPhoto,
  validationConfig,
  popupConfidence,
  formConfidence,
  buttonConfidence,
  imageOpen,
  imageOpeninPopup,
  imageInPopup,
  profileSelectors
} from "./constants.js";
import { Api } from "./api.js";
import { UserInfo } from "./UserInfo.js";
const api = new Api();
const infoUser = new UserInfo(profileSelectors);
//функция закрытия попапа при нажатии ESC
export const handleEscDown = (event) => {
  if (event.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
};
//функция закрытия попапа при клике на оверлей или крестик
export const handleClick = (event) => {
  if (event.target.classList.contains("popup_opened")) {
    closePopup(event.currentTarget);
  }
  if (event.target.classList.contains("popup__close")) {
    closePopup(event.currentTarget);
  }
};
// функция открытия попапа редактирования профиля с начальными данными
export function openProfilePopup() {
  const infoProfile = infoUser.getUserInfo();
  nameInput.value = infoProfile.name;
  jobInput.value = infoProfile.about;
}
// функция редактирования профиля. Внедрена в index.js в экземпляр класса 
// export function handleProfileFormSubmit(event) {
//   event.preventDefault();
//   renderLoading(true, buttonProfile);
//   patchProfile(nameInput.value, jobInput.value)
//     .then((result) => {
//       profileName.textContent = result.name;
//       profileDescrip.textContent = result.about;
//       closePopup(popupEdit);
//     })
//     .catch((error) => console.log(`Ошибка: ${error}`))
//     .finally(() => {
//       renderLoading(false, buttonProfile);
//     });
// }
// функция редактирования аватара
// export function handleAvatarSubmit(event) {
//   event.preventDefault();
//   renderLoading(true, buttonAvatarPhoto);
//   api.patchAvatar(avatarInput.value)
//     .then((result) => {
//       profileImage.src = result.avatar;
//       closePopup(popupAvatar);
//       formElementAvatar.reset();
//       buttonAvatarPhoto.disabled = true;
//       buttonAvatarPhoto.classList.add(validationConfig.inactiveButtonClass);
//     })
//     .catch((error) => console.log(`Ошибка: ${error}`))
//     .finally(() => {
//       renderLoading(false, buttonAvatarPhoto);
//     });
// }
//функция удаления карточки по конкретному ID
export function removeCard() {
  const cardId = formConfidence.value;
  const card = document.getElementById(`${cardId}`);
  renderRemoving(true, buttonConfidence);
  api.deleteCard(cardId)
    .then(() => {
      card.remove();
      closePopup(popupConfidence);
    })
    .catch((error) => console.log(`Ошибка при удалении карточки: ${error}`))
    .finally(() => {
      renderRemoving(false, buttonConfidence);
    });
}
//открыть попап для подтверждения удаления и удалить карту
export function openPopupConfidence(cardId) {
  formConfidence.value = cardId;
  buttonConfidence.addEventListener("click", removeCard);
  openPopup(popupConfidence);
}
export function openPopupImage(event) {
  imageOpeninPopup.textContent = event.target.alt;
  imageInPopup.alt = event.target.alt;
  imageInPopup.src = event.target.src;
  openPopup(imageOpen);
}
