function Card(props) {

    function handleClick() {
      props.onCardClick(props.card);
    }
    return (
<div className="elements__item">
      <button type="button" aria-label="Удалить" className="elements__trash"></button>
      <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <div className="elements__container">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__container_group">
          <button type="button" aria-label="Нравится" className="elements__like"></button>
          <div className="elements__like_count">{props.card.likes.length}</div>
        </div>
      </div>
    </div>
    )
    }
    export default Card