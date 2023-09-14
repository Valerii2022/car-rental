import { AdvertsList } from 'components/AdvertsList';
import { Sidebar } from 'components/SideBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/operations';
import { getAdverts } from 'redux/selectors';

export const Catalog = () => {
  const { items } = useSelector(getAdverts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts(1));
  }, [dispatch]);
  return (
    <>
      <Sidebar />
      <AdvertsList adverts={items} />
    </>
  );
};
