function PopupWithForm(props) {
    return (
      <div className={`popup ${props.isOpen ? `popup_opened` : ''}`} id={props.name} >
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <form name={props.name} className="form" onSubmit={props.handleSubmit}>
            {props.children}
            <button type="submit" aria-label={props.textButton} className="form__save">{props.textButton}</button>
          </form>
          <button type="button" aria-label="Закрыть" className="popup__close" onClick={props.onClose}></button>
        </div>
      </div>
    )
  }
  
  export default PopupWithForm