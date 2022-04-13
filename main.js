(()=>{"use strict";function e(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function t(e,t){t.textContent=e?"Удаление...":"Да"}var n=document.querySelector(".popup_type_edit"),r=n.querySelector(".form__button"),o=n.querySelector(".form"),i=o.querySelector(".form__item_type_description"),a=o.querySelector(".form__item_type_name"),c=document.querySelector(".popup_type_add"),s=c.querySelector(".form__button"),u=(c.querySelector(".form__edit"),document.querySelector(".popup_type_avatar").querySelector(".form__button")),l=document.querySelector(".popup__remove-card").querySelector(".form__button"),f=(document.querySelector(".popup_type_image"),document.querySelector(".profile__button_act_edit")),p=document.querySelector(".profile__button_act_add"),h=document.querySelector(".profile__button_act_avatar");function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputs=Array.from(n.querySelectorAll(t.inputSelector)),this._validationConfig=t,this._form=n.closest(t.formSelector),this._button=this._form.querySelector(t.submitButtonSelector),this._validationStatus=!1}var t,n;return t=e,(n=[{key:"getInputsArray",value:function(){return this._inputs}},{key:"getValidationStatus",value:function(){return this._validationStatus}},{key:"validate",value:function(){var e=this;this._inputs.forEach((function(t){e._isValid(t),e._toggleButtonState()}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputs.forEach((function(t){var n=e._form.querySelector(".form__item_type_error-".concat(t.id));e._hideInputError(t,n)}))}},{key:"_showInputError",value:function(e,t,n){t.textContent=n,t.classList.add(this._validationConfig.errorClass),e.classList.add(this._validationConfig.inputErrorClass)}},{key:"_hideInputError",value:function(e,t){t.classList.remove(this._validationConfig.errorClass),e.classList.remove(this._validationConfig.inputErrorClass)}},{key:"_isValid",value:function(e){var t=this._form.querySelector(".form__item_type_error-".concat(e.id));if(e.validity.valid)this._hideInputError(e,t);else{var n=e.validationMessage;this._showInputError(e,t,n)}}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputs)?(this._button.classList.add(this._validationConfig.inactiveButtonClass),this._button.setAttribute("disabled",!0),this._validationStatus=!1):(this._button.classList.remove(this._validationConfig.inactiveButtonClass),this._button.removeAttribute("disabled"),this._validationStatus=!0)}},{key:"_setEventListeners",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._apiConfig=t}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._apiConfig.baseURL,"/cards"),{headers:this._apiConfig.headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._apiConfig.baseURL,"/users/me"),{headers:this._apiConfig.headers}).then(this._checkResponse)}},{key:"patchProfile",value:function(e,t){return fetch("".concat(this._apiConfig.baseURL,"/users/me"),{method:"PATCH",headers:this._apiConfig.headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._apiConfig.baseURL,"/users/me/avatar"),{method:"PATCH",headers:this._apiConfig.headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"postNewCard",value:function(e,t){return fetch("".concat(this._apiConfig.baseURL,"/cards"),{method:"POST",headers:this._apiConfig.headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._apiConfig.baseURL,"/cards/").concat(e),{method:"DELETE",headers:this._apiConfig.headers}).then(this._checkResponse)}},{key:"putLikeOnCard",value:function(e){return fetch("".concat(this._apiConfig.baseURL,"/cards/likes/").concat(e),{method:"PUT",headers:this._apiConfig.headers}).then(this._checkResponse)}},{key:"deleteLikeOnCard",value:function(e){return fetch("".concat(this._apiConfig.baseURL,"/cards/likes/").concat(e),{method:"DELETE",headers:this._apiConfig.headers}).then(this._checkResponse)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n,r,o){var i=o.handleLike,a=o.handleTrashClick,c=o.clickImage;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._owner=t.owner,this._id=t._id,this._likes=t.likes,this._cardTemplate=document.querySelector(r).content,this._userId=n,this._handleLike=i,this._handleTrashClick=a,this._clickImage=c}var t,n;return t=e,(n=[{key:"_getElement",value:function(){return this._cardTemplate.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardLike.addEventListener("click",(function(){e._handleLike(e)})),this._cardTrash&&this._cardTrash.addEventListener("click",(function(){e._handleTrashClick(e._element,e._id)})),this._cardImage.addEventListener("click",(function(){e._clickImage(e._name,e._link)}))}},{key:"_findUserLike",value:function(e,t){return e.some((function(e){return t===e._id}))}},{key:"updateLikes",value:function(e){this._likes=e.likes,this._cardLike.classList.toggle("card__like_pos_active"),this._cardLikeCounter.textContent=e.likes.length}},{key:"getLike",value:function(){return this._cardLike.classList.contains("card__like_pos_active")}},{key:"getId",value:function(){return this._id}},{key:"generateCard",value:function(){return this._element=this._getElement(),this._cardImage=this._element.querySelector(".card__image"),this._cardDescription=this._element.querySelector(".card__description"),this._cardLikeCounter=this._element.querySelector(".card__like-counter"),this._cardLike=this._element.querySelector(".card__like"),this._cardTrash=this._element.querySelector(".card__trash"),this._cardImage.alt=this._name,this._cardImage.src=this._link,this._cardDescription.textContent=this._name,this._element.id=this._id,this._cardLikeCounter.textContent=this._likes.length,this._findUserLike(this._likes,this._userId)&&this._cardLike.classList.add("card__like_pos_active"),this._owner._id!==this._userId&&this._cardTrash.remove(),this._setEventListeners(),this._element}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){var r=t.items,o=void 0===r?[]:r,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=o,this.selector=n,this._renderer=i,this.container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderAll",value:function(e,t){var n=this;this.container.innerHTML="",e.forEach((function(e){n.container.append(n._renderer(e,t))}))}},{key:"addItem",value:function(e,t){this.container.prepend(this._renderer(e,t))}},{key:"setItems",value:function(e){return this._items=Array.from(e)}},{key:"showItems",value:function(){console.log(this._items)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{id:this._id,name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._id=o,this._name.textContent=t,this._about.textContent=n,this._avatar.src=r}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this.popupSelector=t,this.popup=document.querySelector(this.popupSelector)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_opened"),window.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.popup.classList.remove("popup_opened"),window.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close")&&e.close()}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function q(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n.popup.querySelector(".form"),n._submitButton=n._form.querySelector(".form__button"),n._inputList=n._form.querySelectorAll(".form__item"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._objInputs={},this._inputList.forEach((function(t){e._objInputs[t.name]=t.value})),this._objInputs}},{key:"setEventListeners",value:function(){var e=this;j(R(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){j(R(a.prototype),"close",this).call(this),this._form.reset()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function D(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var J,M=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).image=t.popup.querySelector(".popup__image"),t.title=t.popup.querySelector(".popup__title"),t}return t=a,(n=[{key:"open",value:function(e,t){this.title.textContent=e,this.image.alt=e,this.image.src=t,x(N(a.prototype),"open",this).call(this)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L))(".popup_type_image"),F=new v({baseURL:"https://nomoreparties.co/v1/plus-cohort7",headers:{authorization:"bb6ff8a2-6249-481e-b654-c07491020021","Content-Type":"application/json"}}),z=new k({items:{},renderer:function(e,t){return new b(e,t,"#card_template",{handleLike:ee,handleTrashClick:te,clickImage:ne}).generateCard()}},".places"),$=new w({nameSelector:".profile__name",aboutSelector:".profile__description",avatarSelector:".profile__image"}),G={};J={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__button",errorClass:"form__item_type_active",inputErrorClass:"form__input-error",inactiveButtonClass:"form__button_disabled"},Array.from(document.querySelectorAll(J.formSelector)).forEach((function(e){var t=new d(J,e),n=e.getAttribute("name");G[n]=t,t.enableValidation()}));var K,Q,W=new T(".popup_type_edit",(function(t){e(!0,r),F.patchProfile(t.nameProfile,t.descriptionProfile).then((function(e){$.setUserInfo(e),W.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){e(!1,r)}))})),X=new T(".popup_type_avatar",(function(t){e(!0,u),F.patchAvatar(t.avatarProfile).then((function(e){$.setUserInfo(e),X.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){e(!1,u)}))})),Y=new T(".popup_type_add",(function(t){e(!0,s),F.postNewCard(t.location,t.link).then((function(e){z.addItem(e,e.owner._id),Y.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){e(!1,s)}))})),Z=new T(".popup__remove-card",(function(){t(!0,l),F.deleteCard(Q).then((function(){K.remove(),Z.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){t(!1,l)}))}));Y.setEventListeners(),W.setEventListeners(),X.setEventListeners(),Z.setEventListeners(),M.setEventListeners(),f.addEventListener("click",(function(){var e;e=$.getUserInfo(),a.value=e.name,i.value=e.about,W.open(),G.formEditProfile.resetValidation()})),p.addEventListener("click",(function(){Y.open(),G.formAddPicture.resetValidation()})),h.addEventListener("click",(function(){X.open(),G.formAvatar.resetValidation()}));var ee=function(e){e.getLike()?F.deleteLikeOnCard(e.getId()).then((function(t){e.updateLikes(t)})).catch((function(e){return console.log("Ошибка: ".concat(e))})):F.putLikeOnCard(e.getId()).then((function(t){e.updateLikes(t)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))};function te(e,t){K=e,Q=t,Z.open()}var ne=function(e,t){return M.open(e,t)},re=[F.getInitialCards(),F.getUserInfo()];Promise.all(re).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$.setUserInfo(i),z.renderAll(o,i._id)})).catch((function(e){return console.log("Ошибка загрузки данных: ".concat(e))}))})();