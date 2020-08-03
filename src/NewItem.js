import React from 'react';

class NewItem extends React.Component{
       constructor(props){
           super(props);
           this.state={
                Name:"",
                price:"",
                category:"",
                discription:"",
                Brand:"",
                date:"",
                imgsrc:""
           }
       }
 handleInputName = (e) =>{
        this.setState({ Name : e.target.value})
    }
 handleInputPrice = (e) =>{
        this.setState({ price : e.target.value})
    }
 handleInputCategory = (e) =>{
        this.setState({ category : e.target.value})
    }
 handleInputDisc = (e) =>{
        this.setState({ discription : e.target.value})
    }
 handleInputBrand = (e) =>{
        this.setState({ Brand : e.target.value})
    }
 handleInputDate = (e) =>{
        this.setState({ date : e.target.value})
    }
handleInputImage = (e) =>{
        this.setState({ imgsrc : e.target.value})
    }

 handleSubmit = (e) =>{
       e.preventDefault();
       this.props.newItemDataProduct(this.state)
       alert('New Item added successfully')
       this.setState={
        Name:"",
        price:"",
        category:"",
        discription:"",
        Brand:"",
        date:"",
        imgsrc:""
   }
    }
    render(){
    return(
        <div className="container">
            <div className="row">
              <div className="col-sm-4"></div>
                <div className="col-sm-4 form_style">
                   <h4>Add New More Item</h4>
                    <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control"  
                                placeholder="Enter product name" 
                                name="Name" autoComplete="off"
                                onChange={this.handleInputName}
                                value={this.state.Name}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control"  
                                placeholder="Enter Price" 
                                name="price" autoComplete="off" 
                                onChange={this.handleInputPrice}
                                value={this.state.price}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control"  
                                placeholder="Enter Category" 
                                name="category" autoComplete="off"
                                onChange={this.handleInputCategory}
                                value={this.state.category}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control"  
                                placeholder="Enter Discription" 
                                name="discription" autoComplete="off"
                                onChange={this.handleInputDisc}
                                value={this.state.discription}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control"  
                                placeholder="Enter Brand name" 
                                name="Brand" autoComplete="off"
                                onChange={this.handleInputBrand}
                                value={this.state.Brand}
                                />
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control"  
                                placeholder="select date from calender" 
                                name="date"
                                onChange={this.handleInputDate}
                                value={this.state.date}
                                />
                            </div>
                            <div className="form-group">
                                <input type="file" className="form-control"  
                                placeholder="select file from drive" 
                                name="imgsrc"
                                onChange={this.handleInputImage}
                                value={this.state.imgsrc}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary btn-block"
                            onClick={this.handleSubmit}
                            >Submit</button>
                        </form>
                 </div>
                <div className="col-sm-4"></div>
            </div>
        </div>
    );
}
}
export default NewItem;