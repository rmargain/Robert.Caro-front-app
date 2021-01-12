import React, {Component} from "react";
import AppContext from "../../AppContext";
import { ProductCard } from "../../components/Index";
import { getProducts } from "../../services/productWs";
import { denormalizeData, normalizeData } from "../../utils/dataUtils";


class AllProducts extends Component{
    static contextType = AppContext;

    componentDidMount(){
        const {products} = this.context.state;
        const {setProducts} = this.context;
        
            if(denormalizeData(products).length < 1){
                getProducts().then(res=>{
                    const {result} = res.data  
                    const products = normalizeData(result)
                    setProducts(products)
                })
            }
        }

    render(){
        const {products} = this.context.state
        console.log(products)
        return(
            <div className="uk-section">
                <div className="uk-container">
                <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s">
                    {denormalizeData(products).map((product, index) => (
                    <ProductCard key={index} {...product}/>
                    ))}
                </div>
                </div>
         

            </div>
        )
    }
}

export default AllProducts;