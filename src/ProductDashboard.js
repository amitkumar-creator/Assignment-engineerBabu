import React from 'react';
import './index.css';


class ProductDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectType: "",
            selectSortType:"",
        }
    }
    handleSelect = (e) =>{
        this.setState({
            selectType:e.target.value
        },()=>{
            this.props.selectitemCategory('category', this.state.selectType)
        })
       
    }
    sortByDate = (e) =>{
     this.setState({
        selectSortType:e.target.value
     },()=>{
         this.props.sortDateType('date', this.state.selectSortType)
     })
    }


    render(){
        return(
            <>
            <div className="container Grid_style">
                <h3>All Products</h3>
                <label>Product Category : </label>
                <select onChange={this.handleSelect} className="select_category">
                    <option value=''>-Select category-</option>
                    <option value='fruits'>fruits</option>
                    <option value='Gadget'>Gadget</option>
                    <option value='computer'>computer</option>
                    <option value='handfree'>handfree</option>
                </select>
                <label className="lable_style">Sort by date : </label>
                <select onChange={this.sortByDate} className="select_date">
                    <option value="">-select sort type-</option>
                    <option value="asc">Sort by Ascending</option>
                    <option value="des">Sort by Descending</option>
                </select>
                <div className="row" >
                {this.props.products.map((item, i)=>{
                              return(
                    <div className="col-sm-4 card_style">
                         
                                  <div key={i}>
                                        <img src={item.imgsrc} alt="frist" className="card-img-top" />
                                        <h4>Name : {item.Name}</h4>
                                        <h6>Price : {item.price}</h6>
                                        <p>Category: {item.category}</p>
                                        <p>Discription: {item.discription}</p>
                                        <p>Brand: {item.Brand}</p>
                                        <p>Date: {item.date}</p>
                                        <button className="btn-btn-primary" onClick={()=>{this.props.addtocart(item)}}>Add To Cart</button>
                                   </div>
                    </div>
                    
                    )
                    })
                }
                </div>
                </div>
            </>
        );
    }
}

export default ProductDashboard;