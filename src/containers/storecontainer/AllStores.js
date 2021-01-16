import React, {Component} from "react";
import AppContext from "../../Contexts/AppContext";
import { StoreCard } from "../../components/Index";
import { getStores } from "../../services/storeWs";
import { denormalizeData, normalizeData } from "../../utils/dataUtils";


class AllStores extends Component{
    static contextType = AppContext;

    state= {
        stores: {}
    }

    componentDidMount(){
        const {stores} = this.state;
        
            if(denormalizeData(stores).length < 1){
                getStores().then(res=>{
                    const {result} = res.data  
                    const stores = normalizeData(result)
                    this.setState({stores: stores})
                    console.log(res)
                })
            }
        }
    
    // handleClick = (e) =>{
    //     e.preventDefault();
    //     const
    // }    

    render(){
        const {stores} = this.state
        console.log(stores)
        return(
            <div className="uk-section">
                <div className="uk-container">
                <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s">
                    {denormalizeData(stores).map((store, index) => (
                    <StoreCard key={index} {...store} index={index}/>
                    ))}
                </div>
                </div>
         

            </div>
        )
    }
}

export default AllStores;