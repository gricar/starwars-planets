import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function FilterByDropdowns() {
  const { filtersArr, setFiltersArr } = useContext(Context);
  const { filterByNumericValues } = filtersArr;

  const [filterDropdowns, setFilterDropdowns] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleFilterChange = ({ target: { name, value } }) => {
    setFilterDropdowns({
      ...filterDropdowns,
      [name]: value,
    });
  };

  const handleSubmitFilter = () => {
    console.log('set o filtro');
    setFiltersArr({
      filterByNumericValues: [...filterByNumericValues, filterDropdowns],
    });
  };

  return (
    <form>
      <label htmlFor="column">
        Colunas
        <select
          data-testid="column-filter"
          name="column"
          id="column"
          value={ filterDropdowns.column }
          onChange={ handleFilterChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Operador
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
          value={ filterDropdowns.comparison }
          onChange={ handleFilterChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ filterDropdowns.value }
        onChange={ handleFilterChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleSubmitFilter }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterByDropdowns;