import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import './index.css';
// import Cart from './Cart';

const Navbar = (props) =>{
   const [state, setstate] = useState({
      search:""
   })
    const handleInput = (e)=>{
        setstate({search:e.target.value})
    }
    const handleSubmit = (e) =>{
       e.preventDefault();
       props.SearchProduct('Name', state.search);
    }


    return(
            <>
               <div className="topnav">
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                     <NavLink to="/">
                      <i className="fa fa-home"></i> Home</NavLink>
                      <NavLink to="/addnewitem" className="item_style">
                      <i className="fa fa-plus"></i> Add New Item</NavLink>
                        <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <NavLink className="nav-link active"  to="/cart">
                            <div className="cart-btn">
                            <span className="nav-icon">
                                <i className="fas fa-cart-plus" aria-hidden="true"></i>
                            </span>
                            <div className="cart-items">{props.totalCartAddedItems}</div>
                            </div>
                        </NavLink>
                        </li>
                            <div className="search-container">
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Search by products name" 
                                    onChange={handleInput} autoComplete="off"
                                    name="search"
                                    value={state.search}
                                     />
                                    <button type="submit"
                                    onClick={handleSubmit}
                                    ><i className="fas fa-search"></i></button>
                                </form>
                            </div>
                            {/* {this.data} */}
                        </div>
                 </nav>
                </div>
            </>

  );
}

export default Navbar;

