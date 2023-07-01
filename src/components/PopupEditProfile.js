import PopupWithForm from "./PopupWithForm";

function PopupEditProfile({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={'popupEditProfile'}
      title={'Редактировать профиль'}
      onClose={onClose}
      isOpen={isOpen}
      textButton='Сохранить'
      children={
        <>
          <div className="form__section">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Имя"
                  className="form__input form__input_format_title"
                  id="editProfileTitle"
                  minLength="2"
                  maxLength="40"
                />
                <span className="form__input-error editProfileTitle-error" />
              </div>
              <div className="form__section">
                <input
                  required
                  type="text"
                  name="about"
                  placeholder="Профессия"
                  className="form__input form__input_format_subtitle"
                  id="editProfileSubtitle"
                  minLength="2"
                  maxLength="200"
                />
                <span className="form__input-error editProfileSubtitle-error" />
              </div>
        </>
      }
    />
  )
}

export default PopupEditProfile