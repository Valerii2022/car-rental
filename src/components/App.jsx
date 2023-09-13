import { AdvertsList } from './AdvertsList';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Home } from 'pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<AdvertsList />} />
        <Route path="favourites" element={<p>favourites</p>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
