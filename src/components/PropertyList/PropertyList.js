import React, { useState, useEffect, useRef, useCallback } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Dropdown from "../Dropdown/Dropdown";
import "./PropertyList.css";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [totalProperties, setTotalProperties] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const currentPageRef = useRef(1);
  const [error, setError] = useState("");

  // Function to fetch properties
  const fetchProperties = async () => {
    setIsFetching(true);

    try {
      const res = await fetch(
        `https://admin.balcony.technology/api/search?municipality_slug=paramus-nj&sort=featured&page=${currentPageRef.current}&`
      );
      const newProperties = await res.json();

      setProperties((prevProperties) => [
        ...prevProperties,
        ...newProperties.response.data,
      ]);
      setTotalProperties(newProperties.response.count);
      setCurrentPage((prevCount) => prevCount + 1);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError("Failed to load properties. Please try again later.");
    } finally {
      setIsFetching(false);
    }
  };

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  // Function to check if we're near the bottom of the page
  const handleScroll = useCallback(
    debounce(() => {
      // Calculate the distance from the bottom of the page
      const distanceFromBottom =
        document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop);

      // Check if we're close to the bottom and not already fetching
      if (distanceFromBottom < 100 && !isFetching) {
        // 100px from the bottom

        fetchProperties();
      }
    }, 200),
    [isFetching]
  );

  useEffect(() => {
    fetchProperties();
  }, []); // The empty array [] means this effect will run once after the initial render

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // The empty array [] means this effect will run once after the initial render

  useEffect(() => {
    currentPageRef.current = currentPage; // Update ref whenever currentPage changes
  }, [currentPage]);

  const paramusLogoUrl =
    " https://admin.balcony.technology/storage/LooftEkzBTzFmtYbaqFa5iYX3y1zwR-metaUGFyYW11cyBNdW5pIExvZ28ucG5n-.png";

  return (
    <div className="information-container">
      {error && <ErrorComponent errorMessage={error} />}
      <div className="municipality-logo">
        <img src={paramusLogoUrl} alt="logo" className="property-image" />
        <div className="title">Paramus, NJ Asset Registry</div>
      </div>
      <div className="property-list">
        <div className="list-header">
          <div className="results-counter">{totalProperties} results</div>
          <Dropdown
            options={["Featured", "Abandoned", "Verified", "Recently Sold"]}
          />
        </div>
        <div className="property-table">
          <div className="property-header">
            <div className="header-item">Item</div>
            <div className="header-item large">Address</div>
            <div className="header-item">Owner</div>
            <div className="header-item">Block</div>
            <div className="header-item">Lot</div>
            <div className="header-item">Class</div>
            <div className="header-item">Recent Activity</div>
            <div className="header-item">Token ID</div>
            <div className="header-item">Status</div>
          </div>
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
          {isFetching && <div>Loading more properties...</div>}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
