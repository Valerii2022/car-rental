import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Find Great Deals from Car Rental in Ukraine</h1>
      <p className={css.subtitle}>
        We have great offers for daily, weekly and long term rentals in United
        Kingdom. Find the cheapest prices online, for your future Car Rental in
        United Kingdom in 4 quick easy steps. Book now at the lowest possible
        rates only with a small down payment and pay the rest when you pick up
        the car.
      </p>
      <NavLink className={css.link} to="/catalog">
        Catalog
      </NavLink>
    </div>
  );
};
