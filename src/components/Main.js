import React from "react"
import {api} from "../utils/Api.js"
import Card from "./Card.js"

function Main({ onAddPlace, onEditAvatar, onCardClick, onEditProfile }) {
   const [userName, setUserName] = React.useState('');
   const [userDescription, setUserDescription] = React.useState('');
   const [userAvatar, setUserAvatar] = React.useState('');
   const [cards, setCards] = React.useState([]);
 
   React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([{ name, about, avatar }, cards]) => {
        setUserAvatar(avatar)
        setUserDescription(about)
        setUserName(name)
        setCards(cards)
      })
      .catch(console.log)
  }, [])



  return(
    <>
    <main className="content">
    <section className="profile">
      <button type="button" className="profile__content" onClick={onEditAvatar}>
        <img
          className="profile__avatar"
          src={userAvatar}
          alt="Аватар"
        />
      </button>
      <div className="profile__info">
        <h1 className="profile__title" >{userName}</h1>
        <button className="profile__button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}/>
        <p className="profile__subtitle" >{userDescription}</p>
      </div>
      <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}/>
    </section>
    <section className="elements">
    {cards.map(card => {
            return <Card card={card} key={card._id} onCardClick={onCardClick} />
          })}
    </section>
  </main>
  </>
  );
}

export default Main;