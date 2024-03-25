import React from "react";
import "./PropertyCard.css";
import emptyImage from "../../assets/images/emptyBalcony.jpeg";

const PropertyCard = ({
  address,
  owner,
  block,
  lot,
  estate_type,
  recent_activity,
  hash,
  is_verified,
}) => {
  return (
    <div className="property-row">
      <div className="row-item">
        <img src={emptyImage} alt="Property" className="property-image" />
      </div>
      <div className="row-item address">{address}</div>
      <div className="row-item">{owner}</div>
      <div className="row-item">{block}</div>
      <div className="row-item">{lot}</div>
      <div className="row-item">{estate_type}</div>
      <div className="row-item">{recent_activity}</div>
      <div className="row-item token-id hover-underline">{hash}</div>
      <div className="row-item status-button-container">
        <button className="status-button" data-verified={is_verified} />
      </div>
    </div>
  );
};

export default PropertyCard;
