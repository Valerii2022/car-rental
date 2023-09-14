import { useDispatch } from 'react-redux';
import css from './Sidebar.module.css';
import React, { useState } from 'react';
import { addFilters } from 'redux/favouritesSlise';
// import Select from 'react-select';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [minMileage, setMinMileage] = useState(0);
  const [maxMileage, setMaxMileage] = useState(1000000);
  let filters = {};

  const handleSubmitForm = e => {
    e.preventDefault();
    console.log(e.target[0].value);
    filters.brand = e.target[0].value;
    filters.price = Number(e.target[1].value);
    filters.min = minMileage;
    filters.max = maxMileage;
    dispatch(addFilters(filters));
    setMaxMileage('');
    setMinMileage('');
  };

  // const brandOptions = [
  //   { value: 'buick', label: 'Buick' },
  //   { value: 'volvo', label: 'Volvo' },
  //   { value: 'hummer', label: 'HUMMER' },
  //   { value: 'subaru', label: 'Subaru' },
  //   { value: 'mitsubishi', label: 'Mitsubishi' },
  //   { value: 'nissan', label: 'Nissan' },
  //   { value: 'lincoln', label: 'Lincoln' },
  //   { value: 'gmc', label: 'GMC' },
  //   { value: 'hyundai', label: 'Hyundai' },
  //   { value: 'mini', label: 'MINI' },
  //   { value: 'bentley', label: 'Bentley' },
  //   { value: 'aston-martin', label: 'Aston Martin' },
  //   { value: 'pontiac', label: 'Pontiac' },
  //   { value: 'lamborghini', label: 'Lamborghini' },
  //   { value: 'audi', label: 'Audi' },
  //   { value: 'bmw', label: 'BMW' },
  //   { value: 'chevrolet', label: 'Chevrolet' },
  //   { value: 'mercedes-Benz', label: 'Mercedes-Benz' },
  //   { value: 'chrysler', label: 'Chrysler' },
  //   { value: 'kia', label: 'Kia' },
  //   { value: 'land', label: 'Land' },
  // ];

  // const priceOptions = [
  //   { value: '30', label: '30' },
  //   { value: '40', label: '40' },
  //   { value: '50', label: '50' },
  //   { value: '60', label: '60' },
  //   { value: '70', label: '70' },
  //   { value: '80', label: '80' },
  //   { value: '90', label: '90' },
  //   { value: '100', label: '100' },
  //   { value: '150', label: '150' },
  //   { value: '200', label: '200' },
  //   { value: '250', label: '250' },
  //   { value: '300', label: '300' },
  //   { value: '350', label: '350' },
  //   { value: '400', label: '400' },
  //   { value: '500', label: '500' },
  //   { value: '1000', label: '1000' },
  // ];

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmitForm}>
        <div>
          <p className={css.selectTitle}>Car brand</p>
          <select className={css.selectField}>
            <option value="Enter the text">Enter the text</option>
            <option value="buick">Buick</option>
            <option value="volvo">Volvo</option>
            <option value="hummer">HUMMER</option>
            <option value="subaru">Subaru</option>
            <option value="mitsubishi">Mitsubishi</option>
            <option value="nissan">Nissan</option>
            <option value="lincoln">Lincoln</option>
            <option value="gmc">GMC</option>
            <option value="hyundai">Hyundai</option>
            <option value="mini">MINI</option>
            <option value="bentley">Bentley</option>
            <option value="aston-martin">Aston Martin</option>
            <option value="pontiac">Pontiac</option>
            <option value="lamborghini">Lamborghini</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="chevrolet">Chevrolet</option>
            <option value="mercedes-Benz">Mercedes-Benz</option>
            <option value="chrysler">Chrysler</option>
            <option value="kia">Kia</option>
            <option value="land">Land</option>
          </select>
          {/* <Select
            className={css.selectBrandField}
            placeholder="Enter the text"
            options={brandOptions}
          /> */}
        </div>
        <div>
          <p className={css.selectTitle}>Price / 1 hour</p>
          <select style={{ width: 125 }} className={css.selectField}>
            <option value="default">To $</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="250">250</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
          </select>
          {/* <Select
            className={css.selectPriceField}
            placeholder="To $"
            options={priceOptions}
          /> */}
        </div>
        <div>
          <p className={css.selectTitle}>Car mileage / km</p>
          <div className={css.inputWrap}>
            <label className={css.inputLabel}>
              <p className={css.inputTitle}>From</p>
              <input
                onChange={e => setMinMileage(e.target.value)}
                value={minMileage}
                className={css.inputFrom}
                type="text"
                pattern="[0-9]+"
                title="Only digits provided"
              />
            </label>
            <label className={css.inputLabel}>
              <p className={css.inputTitle}>To</p>
              <input
                onChange={e => setMaxMileage(e.target.value)}
                value={maxMileage}
                className={css.inputTo}
                type="text"
                pattern="[0-9]+"
                title="Only digits provided"
              />
            </label>
          </div>
        </div>
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
