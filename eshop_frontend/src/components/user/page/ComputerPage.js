import React, { useState } from 'react';
import ProductGrid from '../../product/ProductGrid';
import '../../../css/homepage.css';
import '../../../css/product.css';

const ComputerPage = () =>{
  return (
    <div className="container">
      <div className="main">
        <div className="item">
          <h2>Laptop</h2>
          <p>
            A laptop is a compact and portable computer device.
            It is designed for use in work, entertainment or study activities on the go without having to use a bulky desktop computer.
          </p>
        </div>

        <ProductGrid categoryName = "laptop"/>
      </div>
    </div>
  );
};

export default ComputerPage;
