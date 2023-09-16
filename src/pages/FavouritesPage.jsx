import { AdvertsList } from 'components/AdvertsList';
import { Sidebar } from 'components/SideBar';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { fetchAdverts } from 'redux/operations';
import { getAdverts, getFavourites } from 'redux/selectors';

export const Favourites = () => {
  const { items } = useSelector(getAdverts);
  const favourites = useSelector(getFavourites);
  //   const dispatch = useDispatch();
  const favouritesList = items.filter(item => favourites.includes(item.id));

  //   useEffect(() => {
  //     dispatch(fetchAdverts());
  //   }, [dispatch]);
  return (
    <>
      <Sidebar />
      <AdvertsList adverts={favouritesList} />
    </>
  );
};
