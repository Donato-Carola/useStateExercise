// import { useState, } from 'react';
// import style from '../Card/Card.module.css'
// import axios from 'axios'
import Button from "../ButtonDelete/ButtonDelete";
import style from "../Card/Card.module.css";
// import { data } from '../../data';
import PropTypes from "prop-types";

const Card = ({ people, setPeople }) => {
  // Funzione per rimuovere una card
  const deleteCard = (id) => {
    setPeople((prevData) => {
      return prevData.filter((item) => item.id !== id);
    }); // Rimuove l'elemento con l'id corrispondente
  };

  return (
    <>
      <div className="sm:container sm:mx-auto mb-5">
        <div className={`${style.back_color} grid grid-cols-1 p-6 gap-8  `}>
          {people.map((item) => {
            const { id, name, description } = item;
            return (
              <div key={id}>
                <p className="flex justify-between">
                  {name} <Button onClick={() => deleteCard(id)} />
                </p>
                <p> {description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;

Card.propTypes = {
  isWhite: PropTypes.bool,
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
    })
  ),
    setPeople: PropTypes.func.isRequired,    // `setPeople` è una funzione obbligatoria

};

Card.defaultValues = {
  isWhite: false,
};
