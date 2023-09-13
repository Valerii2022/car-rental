import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAdverts } from 'redux/operations';
import { getAdverts } from 'redux/selectors';
import css from './AdvertsList.module.css';

export const AdvertsList = () => {
  const { items, isLoading, error } = useSelector(getAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
        {items.map(
          ({
            year,
            id,
            make,
            model,
            img,
            rentalPrice,
            type,
            mileage,
            rentalCompany,
            accessories,
            address,
          }) => {
            return (
              <li className={css.itemList} key={id}>
                <div className={css.imageWrapper}>
                  <img
                    className={css.image}
                    src={img}
                    alt=""
                    // width="274"
                    height="268"
                  />
                </div>
                <div className={css.titleWrapper}>
                  <p>
                    {make}
                    <span className={css.accent}> {model}, </span>
                    {year}
                  </p>
                  <p>{rentalPrice}</p>
                </div>
                <ul className={css.optionsList}>
                  <li className={css.optionsItem}>{address.split(',')[1]}</li>
                  <li className={css.optionsItem}>{address.split(',')[2]}</li>
                  <li className={css.optionsItem}>{rentalCompany}</li>
                  <li className={css.optionsItem}>{type}</li>
                  <li className={css.optionsItem}>{model}</li>
                  <li className={css.optionsItem}>{mileage}</li>
                  <li className={css.optionsItem}>{accessories[0]}</li>
                </ul>
                <button className={css.learnMoreBtn} type="button">
                  Learn more
                </button>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
