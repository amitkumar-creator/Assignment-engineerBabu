import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Cart from './Cart';
import ProductDashboard from './ProductDashboard';
import { Switch, Route } from 'react-router-dom';
import NewItem from './NewItem';
// import Moment from 'moment';

const App = (props) => {
  const list = [
    { id: '1', "Name": "Apple", isCartAdded: false, "category": "fruits", "price": 2.50, "Brand": "Hi bride", "discription": "pure fruts", "imgsrc": "./image/images/img1.jpg", "date": "2017-10-05" },
    { id: '2', "Name": "Banana", isCartAdded: false, "category": "fruits", "price": 5.50, "Brand": "Hi bride", "discription": "claen fruits", "imgsrc": "./image/images/img2.jpg", "date": "2020-01-28" },
    { id: '3', "Name": "Mobile", isCartAdded: false, "category": "Gadget", "price": 8.50, "Brand": "Nokia brand", "discription": "good for sale", "imgsrc": "./image/images/img3.jpg", "date": "2020-06-12" },
    { id: '4', "Name": "Laptop", isCartAdded: false, "category": "computer", "price": 10.50, "Brand": "Hp brand", "discription": "good quilty", "imgsrc": "./image/images/img4.jpg", "date": "2018-05-21" },
    { id: '5', "Name": "headphone", isCartAdded: false, "category": "handfree", "price": 5.50, "Brand": "Boult", "discription": "hi brand", "imgsrc": "./image/images/img5.jpg", "date": "2019-07-21" },
    { id: '6', "Name": "deasktop", isCartAdded: false, "category": "computer", "price": 20.50, "Brand": "Lenovo", "discription": "portable desktop", "imgsrc": "./image/images/img6.jpg", "date": "2010-03-29" },
  ];
 

  const [products, setproductAddCart] = useState(list);

  const addtocart = (data) => {
    data.isCartAdded = !data.isCartAdded;
    let productsList = [...products];
    productsList = productsList.filter((item) => item.id !== data.id);
    setproductAddCart([
      ...productsList,
      data
    ].sort((a, b) => a.id - b.id));
  }

  const SearchProduct = (category,value) =>{
    let productsList = [...products];
    if(category === 'Name'){
      productsList = productsList.filter((item) => item.Name.toLowerCase() === value.toLowerCase());
    }
    if(!value){
      productsList = list;
    }
    setproductAddCart([
      ...productsList,
    ].sort((a, b) => a.id - b.id));
  }

  const selectitemCategory = (Brand,value) =>{
    let productsList = [...list];
    if(Brand === 'category'){
      productsList = productsList.filter((item) => item.category.toLowerCase() === value.toLowerCase());
    }
    if(!value){
      productsList = list;
    }
    setproductAddCart([
      ...productsList,
    ].sort((a, b) => a.id - b.id));
  }

  const sortDateType = (date, value)=>{
    let productsList = [...list];
    if(date === 'date'){
      if(value === 'asc'){
        productsList = productsList.sort((a,b)=>new Date(a.date) - new Date(b.date))
      }else if(value === 'des'){
        productsList = productsList.sort((a,b)=>new Date(b.date) - new Date(a.date));
      }
      
    }
    
    setproductAddCart([
      ...productsList,
    ]);
    if(!value){
      productsList = list;
      setproductAddCart([
        ...productsList,
      ].sort((a, b) => a.id - b.id));
    }
  }

  const newItemDataProduct = (data) =>{
    let productsList = [...products];
    setproductAddCart([
      ...productsList,
      data
    ].sort((a, b) => a.id - b.id));
  }

  const totalCartAddedItems = products.filter((item) => item.isCartAdded).length;

  return (
    <>
      <Navbar list={list} SearchProduct={SearchProduct} totalCartAddedItems={totalCartAddedItems}/>
      <Switch>
        <Route exact path="/" render={() => <ProductDashboard products={products} 
        addtocart={addtocart} selectitemCategory={selectitemCategory} sortDateType={sortDateType} />} />
        <Route exact path="/cart" render={(props) => <Cart products={products} />} />
        <Route exact path="/addnewitem" render={() => <NewItem newItemDataProduct={newItemDataProduct} />} />
      </Switch>
    </>
  );
}


export default App;
