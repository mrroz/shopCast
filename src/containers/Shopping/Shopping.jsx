
import Wrapper from '../../hoc/Wrapper'
import  { Component } from 'react';
import Controls from '../../components/Controls/Controls'

const prices = {
    product1:25,
    product2:45,
    product3:65,
    product4:89,
}

class Sopping extends Component {
    state = { 
        products:{
            product1:0,
            product2:0,
            product3:5,
            product4:0,
        },
        totalPrice:0,
     }

     addProductHandler = (type) =>{

        const prevCount =  this.state.products[type]
        const updateCont = prevCount + 1
        const updateProducts = {...this.state.products}
        updateProducts[type] =  updateCont
        const priceAdd = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = priceAdd + prevPrice
        this.setState({  totalPrice:newPrice,  products: updateProducts})

     }


     removeProductHandler =(type)=>{
        const prevCount =  this.state.products[type]
        const updateCont = prevCount - 1
        const updateProducts = {...this.state.products}
        updateProducts[type] =  updateCont
        const priceremov = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice  - priceremov
        this.setState({  totalPrice:newPrice,  products: updateProducts})

     }




    render() { 
        return ( 

            <Wrapper>
                  <div className='content'>
                
                  <Controls 
                   productAdd={this.addProductHandler}
                    productRemove={this.removeProductHandler}
                    price={this.state.totalPrice}
                    
                    />
                </div>

            </Wrapper>
          
         );
    }
}
 
export default Sopping;




