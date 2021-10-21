import React from 'react';
import './tables.css';
import Header from './Header';

const Tables = () => (
  <>
    <Header />
    <section>
      <div className="tables-container">
        <button type = "button" className="table1" to = '/products'>
          <p>Mesa 1</p>
        </button>

        <button type = "button" className="table2">
          <p>Mesa 2</p>
        </button>

        <button type = "button" className="table3">
          <p>Mesa 3</p>
        </button>

        <button type = "button"className="table4">
          <p>Mesa 4</p>
        </button>

        <button type ="button" className="table5">
          <p>Mesa 5</p>
        </button>

        <button type ="button" className="table6">
          <p>Mesa 6</p>
        </button>
      </div>
    </section>
  </>
);

export default Tables;
