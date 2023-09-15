import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import { brandsLogo } from '../image/brands';

export const Home = () => {
  return (
    <>
      <div className={css.titleWrap}>
        <div className={css.container}>
          <h1 className={css.title}>
            Find Great Deals from Car Rental in Ukraine
          </h1>
          <p className={css.subtitle}>
            We have great offers for daily, weekly and long term rentals in
            Ukraine. Find the cheapest prices online, for your future Car Rental
            in Ukraine in 4 quick easy steps. Book now at the lowest possible
            rates only with a small down payment and pay the rest when you pick
            up the car.
          </p>
          <NavLink className={css.link} to="/catalog">
            View Catalog
          </NavLink>
        </div>
      </div>
      <div className={css.container}>
        <ul className={css.brandsList}>
          <li className={css.brandItem}>
            <img className={css.brandImg} src={brandsLogo.buick} alt="Buick" />
          </li>
          <li className={css.brandItem}>
            <img className={css.brandImg} src={brandsLogo.volvo} alt="Volvo" />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.hummer}
              alt="Hummer"
            />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.subaru}
              alt="Subaru"
            />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.mitsubishi}
              alt="Mitsubishi"
            />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.nissan}
              alt="Nissan"
            />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.lincoln}
              alt="Lincoln"
            />
          </li>
          <li className={css.brandItem}>
            <img className={css.brandImg} src={brandsLogo.gmc} alt="GMC" />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.hyunday}
              alt="Hyunday"
            />
          </li>
          <li className={css.brandItem}>
            <img className={css.brandImg} src={brandsLogo.mini} alt="MINI" />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.aston}
              alt="Aston Martin"
            />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.bentley}
              alt="Bentley"
            />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.lamborghini}
              alt="Lamborghini"
            />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.pontiac}
              alt="Pontiac"
            />
          </li>
          <li className={css.brandItem}>
            <img className={css.brandImg} src={brandsLogo.audi} alt="Audi" />
          </li>
          <li className={css.brandItem}>
            <img className={css.brandImg} src={brandsLogo.bmw} alt="BMW" />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.chevy}
              alt="Chevrolet"
            />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.mers}
              alt="Mercedes Benz"
            />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.chrysler}
              alt="Chrysler"
            />
          </li>
          <li className={css.brandItem}>
            <img className={css.brandImg} src={brandsLogo.kia} alt="Kia" />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.land}
              alt="Land Rover"
            />
          </li>
          <li className={css.brandItem}>
            <img
              className={css.brandImg}
              src={brandsLogo.toyota}
              alt="Toyota"
            />
          </li>
          <li className={css.brandItem}>
            <img className={css.brandImg} src={brandsLogo.lexus} alt="Lexus" />
          </li>
          <li className={css.brandItem}>
            <img className={css.brandImg} src={brandsLogo.acura} alt="Acura" />
          </li>
        </ul>
      </div>
    </>
  );
};
