import PopupWithForm from "./PopupWithForm";

function PopupAddCard({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={'popupAddCard'}
      title='Новое место'
      onClose={onClose}
      isOpen={isOpen}
      textButton='Создать'
      children={
        <>
          <div className="form__section">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Имя"
                  className="form__input form__input_format_title"
                  id="editTitle"
                  minLength="2"
                  maxLength="30"
                />
                <span className="form__input-error editTitle-error" />
              </div>
              <div className="form__section">
                <input
                  required
                  type="url"
                  name="link"
                  placeholder="Ссылка на картинку"
                  className="form__input form__input_format_subtitle"
                  id="editSubtitle"
                />
                <span className="form__input-error editSubtitle-error" />
              </div>
        </>
      }
    />
  )
}

export default PopupAddCard