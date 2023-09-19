import { AdvertsList } from 'components/AdvertsList';
import { Sidebar } from 'components/SideBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/operations';
import { getAdverts, getFavourites } from 'redux/selectors';

export const Favourites = () => {
  const { items } = useSelector(getAdverts);
  const favourites = useSelector(getFavourites);
  const dispatch = useDispatch();
  const favouritesList = items.filter(item => favourites.includes(item.id));

  useEffect(() => {
    dispatch(fetchAdverts({ pageNumbert: 1, brand: '' }));
  }, [dispatch]);
  return (
    <>
      <Sidebar />
      {favouritesList.length === 0 ? (
        <p
          style={{
            padding: '50px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            fontWeight: '700',
          }}
        >
          Sorry, you have no favorite adverts...
        </p>
      ) : (
        <AdvertsList adverts={favouritesList} />
      )}
    </>
  );
};
