import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { ReactComponent as ClosetIcon } from '../../image/close.svg';
import { useSelector } from 'react-redux';
import { getAdverts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ currentId, modalIsOpen }) => {
  const { items } = useSelector(getAdverts);
  const {
    year,
    id,
    make,
    model,
    img,
    description,
    rentalPrice,
    functionalities,
    type,
    mileage,
    rentalConditions,
    accessories,
    fuelConsumption,
    engineSize,
    address,
  } = items.find(item => item.id === Number(currentId));

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        modalIsOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIsOpen]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      modalIsOpen(false);
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <ClosetIcon
          className={css.closeIcon}
          width="24"
          height="24"
          onClick={handleBackdropClick}
        />
        <img className={css.image} src={img} alt="" width="461" />
        <h2 className={css.title}>
          {make}
          <span className={css.accent}> {model}, </span>
          {year}
        </h2>
        <div className={css.optionsListWrap}>
          <ul className={css.optionsList}>
            <li className={css.optionsItem}>{address.split(',')[1]}</li>
            <li className={css.optionsItem}>{address.split(',')[2]}</li>
            <li className={css.optionsItem}>Id: {id}</li>
            <li className={css.optionsItem}>Year: {year}</li>
            <li className={css.optionsItem}>Type: {type}</li>
          </ul>
          <ul className={css.optionsList}>
            <li className={css.optionsItem}>
              Fuel Consumption: {fuelConsumption}
            </li>
            <li className={css.optionsItem}>Engine Size: {engineSize}</li>
          </ul>
        </div>
        <p className={css.description}>{description}</p>
        <p className={css.subTitle}>Accessories and functionalities:</p>
        <div className={css.optionsListWrap}>
          <ul className={css.optionsList}>
            {accessories.map(item => {
              return (
                <li key={nanoid()} className={css.optionsItem}>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className={css.optionsList}>
            {functionalities.map(item => {
              return (
                <li key={nanoid()} className={css.optionsItem}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <p className={css.subTitle}>Rental Conditions: </p>
        <ul className={css.conditionsList}>
          {rentalConditions.split('\n').map(item => {
            return (
              <li key={nanoid()} className={css.conditionItem}>
                {item}
              </li>
            );
          })}
          <li className={css.conditionItem}>
            Mileage: <span className={css.accentConditions}>{mileage}</span>
          </li>
          <li className={css.conditionItem}>
            Price: <span className={css.accentConditions}>{rentalPrice}</span>
          </li>
        </ul>
        <Link to="tel:+380730000000" id={id} className={css.rentalBtn}>
          Rental car
        </Link>
      </div>
    </div>,
    modalRoot
  );
};
