import css from './Sidebar.module.css';
import React from 'react';
import Select from 'react-select';

export const Sidebar = () => {
  // const [minMileage, setMinMileage] = useState('');
  // const [maxMileage, setMaxMileage] = useState('');
  // const { items } = useSelector(getAdverts);

  const handleSubmitForm = e => {
    e.preventDefault();
    console.log(e);
  };

  const brandOptions = [
    { value: 'buick', label: 'Buick' },
    { value: 'volvo', label: 'Volvo' },
    { value: 'hummer', label: 'HUMMER' },
    { value: 'subaru', label: 'Subaru' },
    { value: 'mitsubishi', label: 'Mitsubishi' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'lincoln', label: 'Lincoln' },
    { value: 'gmc', label: 'GMC' },
    { value: 'hyundai', label: 'Hyundai' },
    { value: 'mini', label: 'MINI' },
    { value: 'bentley', label: 'Bentley' },
    { value: 'aston-martin', label: 'Aston Martin' },
    { value: 'pontiac', label: 'Pontiac' },
    { value: 'lamborghini', label: 'Lamborghini' },
    { value: 'audi', label: 'Audi' },
    { value: 'bmw', label: 'BMW' },
    { value: 'chevrolet', label: 'Chevrolet' },
    { value: 'mercedes-Benz', label: 'Mercedes-Benz' },
    { value: 'chrysler', label: 'Chrysler' },
    { value: 'kia', label: 'Kia' },
    { value: 'land', label: 'Land' },
  ];

  const priceOptions = [
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
    { value: '60', label: '60' },
    { value: '70', label: '70' },
    { value: '80', label: '80' },
    { value: '90', label: '90' },
    { value: '100', label: '100' },
    { value: '150', label: '150' },
    { value: '200', label: '200' },
    { value: '250', label: '250' },
    { value: '300', label: '300' },
    { value: '350', label: '350' },
    { value: '400', label: '400' },
    { value: '500', label: '500' },
    { value: '1000', label: '1000' },
  ];

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmitForm}>
        <div>
          <p className={css.selectTitle}>Car brand</p>
          <Select
            className={css.selectBrandField}
            placeholder="Enter the text"
            options={brandOptions}
          />
        </div>
        <div>
          <p className={css.selectTitle}>Price / 1 hour</p>
          <Select
            className={css.selectPriceField}
            placeholder="To $"
            options={priceOptions}
          />
        </div>
        <div>
          <p className={css.selectTitle}>Car mileage / km</p>
          <div className={css.inputWrap}>
            <label className={css.inputLabel}>
              <input
                className={css.inputFrom}
                type="text"
                pattern="[0-9]+"
                placeholder="From"
                title="Only digits provided"
              />
            </label>
            <label className={css.inputLabel}>
              <input
                className={css.inputTo}
                type="text"
                pattern="[0-9]+"
                placeholder="To"
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
