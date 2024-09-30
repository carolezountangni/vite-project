import React, { useState } from "react";
import { Input } from "./forms/Input.jsx";
import { Checkbox } from "./forms/Checkbox.jsx";
import { ProductRow } from "./products/ProductRow.jsx";
import { ProductCategoryRow } from "./products/ProductCategoryRow.jsx";
// import {ErrorBoundary}  from "./ErrorBoundary.jsx"
import {ErrorBoundary}  from "react-error-boundary"


const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function Product() {
    const [showStockedOnly, setShowStockedOnly] = useState(false);
    const [search, setSearch] = useState('');

    const visibleProducts = PRODUCTS.filter(product =>{
      if(showStockedOnly && !product.stocked){

        return false
      }

      if(search && !product.name.includes(search)){
        return false
      }

      return true 
    })

    return (
        <div className="container my-3">
            <SearchBar 
            search={search}
            onSearchChange={setSearch}
            showStockedOnly={showStockedOnly} 
            onStockedOnlyChange={setShowStockedOnly}
        />
            
            <ErrorBoundary 
            FallbackComponent={AlertError}
            onReset={() => console.log('reset')}
            
            >

                <ProductTable products={visibleProducts}  />

            </ErrorBoundary>
        </div>
    );
}
function  AlertError({error, resetErrorBoundary}){
    return <div className="alert alert-danger">
        {error.toString()}
        <button className="btn btn-secondary" 
        onClick={resetErrorBoundary}>Reset</button>
    </div>
}

function SearchBar({ showStockedOnly, onStockedOnlyChange,search,onSearchChange }) {
    return (
        <div>
            <div className="mb-3">
               
               <Input 
                value={search}
                onChange={onSearchChange}
                placeholder="Rechercher..." />

                <input  type="range" className="form-range" min={0} max={10}/>
                <Checkbox
                    id="stocked"
                    checked={showStockedOnly}
                    onChange={onStockedOnlyChange}
                    label="N'afficher que les produits en stock"
                />
            </div>
        </div>
    );
}


function ProductTable({ products, showStockedOnly }) {
    const rows = [];
    let lastCategory = null;

    for (let product of products) {
        // if (showStockedOnly && !product.stocked) {
        //     continue;
        // }

        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />);
        }
        lastCategory = product.category;
        rows.push(<ProductRow product={product} key={product.name} />);
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default Product;

