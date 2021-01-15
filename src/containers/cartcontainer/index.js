import React, {Component} from "react";
import AppContext from "../../AppContext";
import { denormalizeData, normalizeData } from "../../utils/dataUtils";
import { ProductCard } from "../../components/Index"
 


class CartSum extends Component{
    static contextType = AppContext;
       
    render(){
        const {cart} = this.context.state
        console.log(cart)
        return(
            <div className="uk-section">
                {/* <div className="uk-container">
                <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s">
                    {denormalizeData(cart).map((product, index) => (
                    <ProductCard key={index} {...product} index={index}/>
                    ))}
                </div>
                </div> */}
         

            </div>
        )
    }
}

export default CartSum;