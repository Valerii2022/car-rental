import { AdvertsList } from 'components/AdvertsList';
import { Sidebar } from 'components/SideBar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/operations';
import { getAdverts } from 'redux/selectors';

export const Catalog = () => {
  const { items } = useSelector(getAdverts);
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts(pageNumber));
  }, [dispatch, pageNumber]);
  return (
    <>
      <Sidebar />
      <AdvertsList adverts={items} setPage={setPageNumber} page="catalog" />
    </>
  );
};
