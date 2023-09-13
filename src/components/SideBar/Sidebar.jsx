import { useSelector } from 'react-redux';
import css from './Sidebar.module.css';
import { getAdverts } from 'redux/selectors';
import { nanoid } from 'nanoid';

export const Sidebar = () => {
  const { items } = useSelector(getAdverts);
  const currentBrands = items.map(item => item.make);

  const handleSubmitForm = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmitForm}>
        <p>Car brand</p>
        <select className={css.selectField} placeholder="Enter the text">
          {currentBrands.map(item => {
            return (
              <option key={nanoid()} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <p>Price / 1 hour</p>
        <select className={css.selectField} placeholder="to $">
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
        </select>
        <p>Car mileage / km</p>
        <label>
          <input type="text" placeholder="From" />
        </label>
        <label>
          <input type="text" placeholder="To" />
        </label>
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
