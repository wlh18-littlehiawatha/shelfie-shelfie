import React, { Component } from 'react';


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

   // handleChangeImgurl = () => {
   //    this.setState({
   //       imgurl: event.target.value
   //    })
   // }

   // handleChangeProduct = () => {
   //    this.setState({
   //       name: event.target.value
   //    })
   // }

   // handleChangePrice = () => {
   //    this.setState({
   //       price: event.target.value
   //    })
   // }



   // handleChangeCancel = () => {
   //    this.setState({
         
   //    })
   // }

   // handleChangeAdd = () => {
   //    this.setState({

   //    })
   // }

   render() {


      return (
         <div>
            <img src="https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg" alt="product image" />
            <input placeholder="Insert Image url" />
            <input placeholder="Insert Product Name" />
            <input placeholder="Insert Price" />
            <button onClick={this.handleChangeCancel}>Cancel</button>
            <button onClick={this.handleChangeAdd}>Add to Inventory</button>
         </div>
      )
   }
}

export default Form;
