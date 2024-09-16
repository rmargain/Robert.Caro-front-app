import React, {Component} from "react";
import AppContext from "../../Contexts/AppContext";
import { ProductCard } from "../../components/Index";
import { getProductsByUser } from "../../services/productWs";
import { denormalizeData, normalizeData } from "../../utils/dataUtils";


class StoreProducts extends Component{
    static contextType = AppContext;

    state ={
        products: {},
    }

    componentDidMount(){
        const {products} = this.state;
            if(denormalizeData(products).length < 1){
                const owner = this.props.match.params.id
                getProductsByUser(owner).then(res=>{
                    const {result} = res.data 
                    const products = normalizeData(result)
                    this.setState({products: products})
                })
            }
        }
    
    

    render(){
        const {products} = this.state
        console.log(products)
        return(
            <div className="uk-section">
                <div className="uk-container">
                <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s">
                    {denormalizeData(products).map((product, index) => (
                    <ProductCard key={index} {...product} index={index}/>
                    ))}
                </div>
                </div>
         

            </div>
        )
    }
}

export default StoreProducts;