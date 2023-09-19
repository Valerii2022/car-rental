import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts, getFavourites, getFilters } from 'redux/selectors';
import css from './AdvertsList.module.css';
import { ReactComponent as HeartIcon } from '../../image/heart.svg';
import { ReactComponent as ActiveIcon } from '../../image/active.svg';
import { Modal } from 'components/Modal';
import { addFavourites, deleteFavourites } from 'redux/favouritesSlise';
import PropTypes from 'prop-types';

export const AdvertsList = ({ adverts, setPage, page }) => {
  const { error, isLoading, loadMore } = useSelector(getAdverts);
  const filters = useSelector(getFilters);
  const favourites = useSelector(getFavourites);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(null);

  const filteredAdverts = adverts.filter(item => {
    if (filters.rentalPrice === '$') {
      return item;
    }
    if (
      Number(filters.rentalPrice) >=
        Number(item.rentalPrice.slice(1, item.rentalPrice.length)) &&
      Number(filters.min.split(',').join('')) <= item.mileage &&
      item.mileage <= Number(filters.max.split(',').join(''))
    ) {
      return item;
    }
    return null;
  });

  const handleBtnClick = e => {
    setId(e.target.id);
    setOpenModal(true);
  };

  const handleHeartClick = currentId => {
    if (favourites.includes(currentId)) {
      dispatch(deleteFavourites(currentId));
    } else {
      dispatch(addFavourites(currentId));
    }
  };

  return (
    <>
      <div className={css.container}>
        <p
          style={{
            paddingBottom: '25px',
            paddingLeft: '50px',
            paddingRight: '50px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            fontWeight: '700',
          }}
        >
          Search results found{' '}
          <span style={{ color: '#3470ff' }}>{filteredAdverts.length}</span>{' '}
          adv.
        </p>
        <ul className={css.list}>
          {isLoading && <b>Loading adverts...</b>}
          {error && <b>{error}</b>}

          {filteredAdverts.length !== 0 ? (
            filteredAdverts.map(
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
                  <li className={css.listItem} key={id}>
                    <div className={css.imageWrapper}>
                      {favourites.includes(id) ? (
                        <ActiveIcon
                          onClick={() => handleHeartClick(id)}
                          className={css.heartIcon}
                          width="18"
                          height="18"
                        />
                      ) : (
                        <HeartIcon
                          onClick={() => handleHeartClick(id)}
                          className={css.heartIcon}
                          width="18"
                          height="18"
                        />
                      )}
                      <img
                        className={css.image}
                        src={img}
                        alt={make}
                        width="401"
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
            )
          ) : (
            <p
              style={{
                padding: '50px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              Sorry, no results were found for your query... Please, try again!
            </p>
          )}
        </ul>
        {page === 'catalog' && loadMore && (
          <button
            onClick={() => setPage(pageNumber => pageNumber + 1)}
            type="button"
            className={css.loadMoreBtn}
          >
            Load more
          </button>
        )}
      </div>
      {openModal && <Modal currentId={id} modalIsOpen={setOpenModal} />}
    </>
  );
};

AdvertsList.propTypes = {
  adverts: PropTypes.array,
  setPage: PropTypes.func,
  page: PropTypes.string,
};
