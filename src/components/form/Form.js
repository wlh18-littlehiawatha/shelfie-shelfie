import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {
   constructor(props) {
      super(props)

      this.state = {
         imgurl: "",
         name: "",
         price: 0

      }
      // Bind statements
   }

   handleChangeImgurl = (value) => {
      console.log(value)
      this.setState({
         imgurl: value
      })
   }

   handleChangeProduct = (value) => {
      console.log(value)
      this.setState({
         name: value
      })
   }

   handleChangePrice = (value) => {
      console.log(value)
      this.setState({
         price: value
      })
   }



   handleChangeCancel = () => {
      this.setState({
         imgurl: "",
         name: "",
         price: 0
         
      })
   }

   createProduct = () => {
      const {imgurl, name, price} = this.state

      axios.post('/api/product', {imgurl, name, price} ).then(res => {
         this.setState({
            imgurl: "",
            name: "",
            price: 0
         })
      })
   }

   render() {


      return (
         <div>
            <img src="https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg" alt="product image" />


            <input onChange={input => this.handleChangeImgurl (input.target.value) } type="url" placeholder="Insert Image url"      value={this.state.imgurl}/>
            <input onChange={input => this.handleChangeProduct (input.target.value) } type="text" placeholder="Insert Product Name" value={this.state.name}/>
            <input onChange={input => this.handleChangePrice (input.target.value) } type="number" placeholder="Insert Price"        value={this.state.price}/>


            <button onClick={this.handleChangeCancel}>Cancel</button>
            <button onClick={this.createProduct}>Add to Inventory</button>
         </div>
      )
   }
}

export default Form;
