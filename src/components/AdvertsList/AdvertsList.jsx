import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAdverts } from 'redux/operations';
import { getAdverts } from 'redux/selectors';
import css from './AdvertsList.module.css';
import { ReactComponent as HeartIcon } from '../../image/heart.svg';
import { Modal } from 'components/Modal';
import { Sidebar } from 'components/SideBar';

export const AdvertsList = () => {
  const { items, isLoading, error } = useSelector(getAdverts);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleBtnClick = e => {
    setId(e.target.id);
    setOpenModal(true);
  };

  return (
    <>
      <Sidebar />
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
                    <HeartIcon
                      className={css.heartIcon}
                      width="18"
                      height="18"
                    />
                    <img
                      className={css.image}
                      src={img}
                      alt=""
                      // width="274"
                      height="268"
                    />
                  </div>
                  <div className={css.titleWrapper}>
                    <h2 className={css.title}>
                      {make}
                      <span className={css.accent}> {model}, </span>
                      {year}
                    </h2>
                    <p>{rentalPrice}</p>
                  </div>
                  <div className={css.optionsListWrap}>
                    <ul className={css.optionsList}>
                      <li className={css.optionsItem}>
                        {address.split(',')[1]}
                      </li>
                      <li className={css.optionsItem}>
                        {address.split(',')[2]}
                      </li>
                      <li className={css.optionsItem}>{rentalCompany}</li>
                    </ul>
                    <ul className={css.optionsList}>
                      <li className={css.optionsItem}>{type}</li>
                      <li className={css.optionsItem}>{model}</li>
                      <li className={css.optionsItem}>{mileage}</li>
                      <li className={css.optionsItem}>{accessories[0]}</li>
                    </ul>
                  </div>
                  <button
                    id={id}
                    className={css.learnMoreBtn}
                    type="button"
                    onClick={handleBtnClick}
                  >
                    Learn more
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </div>
      {openModal && <Modal currentId={id} modalIsOpen={setOpenModal} />}
    </>
  );
};
