module.exports = {

   // Post
   createProduct: (req, res) => {
      const db = req.app.get('db')
      const { name, price, imgurl } = req.body
      // console.log(req.body)
      db.create_product([name, price, imgurl])
         .then(() => res.sendStatus(200))
         // .catch(error => console.log(error, 'error with create product controller'))        
         .catch(err => {
            res.status(500).send({ errorMessage: "Website currently under maintenance" });
            console.log(err);
         });
   },


   
   getProduct: (req, res) => {
      const db = req.app.get('db')
      db.get_product([])
      .then((resProducts) => res.status(200).send(resProducts))
      .catch((err) => console.log(err, `error with getProduct method in controller.js`))
   },

   
   
   // updateProduct:


   updateProduct: (req, res) => {
      const {imgurl, name, price} = req.body
      const {product_id} = req.params

      const db = req.app.get('db')
      db.update_product([product_id, name, price, imgurl])
      .then((resProducts) => res.status(200).send(resProducts))
      .catch((err) => {
      res.status(500).send({errorMessage: "Website currently under maintenance" });
      console.log(err, `error with updateProduct method in controller.js`)}
      
      )   
   },



   // deleteProduct:


   deleteProduct: (req, res) => {
      const db = req.app.get('db')
      const {product_id} = req.params

      db.delete_product(product_id)
      .then(() => res.sendStatus(200))
      .catch((err) => {
         res.status(500).send({errorMessage: "Website currently under maintenance" });
         console.log(err, `error with updateProduct method in controller.js`)}         
         )   
   }




}




























































// import React, { Component } from 'react';


// class Form extends Component {
//    constructor(props) {
//       super(props)

//       this.state = {
//          imgurl: "",
//          name: "",
//          price: 0

//       }
//       // Bind statements
//    }

//    // handleChangeImgurl = (value) => {
//    //    console.log(value)
//    //    this.setState({
//    //       imgurl: value
//    //    })
//    // }

//    // handleChangeProduct = (value) => {
//    //    console.log(value)
//    //    this.setState({
//    //       name: value
//    //    })
//    // }

//    // handleChangePrice = (value) => {
//    //    console.log(value)
//    //    this.setState({
//    //       price: value
//    //    })
//    // }

//    handleChangeAll = ({name, value})=> {
//       this.setState({
//          [name]: value
//       })
//    }



//    handleChangeCancel = () => {
//       this.setState({
//          imgurl: "",
//          name: "",
//          price: 0

//       })
//    }

//    handleChangeAdd(){
//       this.setState({
//          imgurl: "",
//          name: "",
//          price: 0
//       })
//    }

//    render() {


//       return (
//          <div>
//             <img src="https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg" alt="product image" />

//             <input onChange={e => this.handleChangeAll(e.target) }type="url"   name="imgurl" value={this.state.imgurl} placeholder="Insert Image url" />
//             <input onChange={e => this.handleChangeAll(e.target) }type="text" name="name" value={this.state.name}  placeholder="Insert Product Name" />
//             <input onChange={e => this.handleChangeAll(e.target) }type="numeric" name="price" value={this.state.price}  placeholder="Insert Price" />


//             <button onClick={this.handleChangeCancel}>Cancel</button>
//             <button onClick={this.handleChangeAdd}>Add to Inventory</button>
//          </div>
//       )
//    }
// }

// export default Form;
