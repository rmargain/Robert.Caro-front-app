import { Link } from "react-router-dom";
const StoreCard = ({
  _id,
  store_name,
  store_picture,
  description,
  _owner,
}) => {
  return (
    <div className="uk-margin-small-bottom" owner={_owner._id}>
    <Link to={`/store/products/${_owner._id}`} owner={_owner._id}>
      <div className="uk-card uk-card-default">
          <div className="uk-card-header uk-padding-small">
            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
            <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">
                {store_name}
                </h3>
            </div>
            </div>
            </div>
            <div className="uk-card-media-top">
            </div>
            <div className="uk-card-body uk-padding-small">
            <div className="uk-width-auto">
            <img src={store_picture} />
            </div>
            <div> 
            </div>
            <p className="uk-text-break">{description}</p>
        </div>
      </div>
    </Link>
      
    </div>
  );
};
export default StoreCard;