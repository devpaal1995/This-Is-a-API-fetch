

import React from "react";

import { useState } from "react";

export  function TwoWayBinding(){

    const [product, setProduct] = useState({Name:"Your Product Name", Price:0, City:"Hyd", Stock:true})
    const [updateProduct, setUpdateProduct] = useState({Name:"",Price:0,City:"",Stock:false})

    function ChangeName(e){
        setProduct({
            Name:e.traget.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })
    }

     function ChangePrice(e){
        setProduct({
            Name: product.Name,
            Price: e.traget.value,
            City: product.City,
            Stock: product.Stock
        })
     }

      function ChangeCity(e){
        setProduct({
           Name: product.Name,
           Price:product.Price,
           City: e.target.value,
           Stock: product.Stock, 
        })
      }

      function ChangeStock(e){
        setProduct({
        Name: product.Name,
        Price: product.Price,
        City: product.City,
        Stock: e.target.checked
        })
      }
    function ResisterClick(){
        setUpdateProduct(product);
    }
 

    return(
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="clo-3">
                    <h2>Resister</h2>
                 <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={ChangeName} value={product.Name} className="from-control"/></dd>
                    <dt>Price</dt>
                    <dd><input type="text" onChange={ChangePrice} value={product.Price} className="from-control"/></dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={ChangeCity} value={product.City}>
                            <option>Delhi</option>
                            <option>Hyd</option>

                             </select>
            
                    </dd>
                    <dt>Stock</dt>
                    <dd className="form-switch"> <input onChange={ChangeStock} className="form-check-input" checked={product.Stock} type="checkbox"/>Availabe</dd>
                 </dl>
            <button onClick={ResisterClick} className="btn btn-primary w-20">Resister</button>
                </div>
               <div className="col-9">
                <h2>Product Details</h2>
               <dl>
                <dt>Name</dt>
                <dd>{updateProduct.Name}</dd>
                <dt>Price</dt>
                <dd>{updateProduct.Price}</dd>
                <dt>City</dt>
                <dd>{updateProduct.City}</dd>
                <dt>Stock</dt>
                <dd>{(updateProduct.Stock===true)?"Available":"Out of Stock"}</dd>
               </dl>

               </div>
            </div>

        </div>
    )

}