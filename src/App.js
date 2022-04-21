import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import TabItem from "./components/TabItem";
import ProductItem from "./components/ProductItem";

function App() {
  const [tabsList, setTabsList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [activeTab, setActiveTab] = useState("allProducts");
  useEffect(() => {
    async function fetchdata() {
      await axios
        .get("https://fakestoreapi.com/products/categories")
        .then((response) => {
          setTabsList(response.data);
        });

      await axios.get("https://fakestoreapi.com/products").then((response) => {
        setProductsList(response.data);
      });
    }
    fetchdata();
  }, []);

  const clickTabItem = (tabValue) => {
    setActiveTab(tabValue);
  };

  const defaultTabClass = activeTab === "allProducts" ? "active-tab-btn" : "";

  const filteredProductsList =
    activeTab === "allProducts"
      ? productsList
      : productsList.filter(
          (eachProduct) => eachProduct.category === activeTab
        );

  return (
    <>
      <Header />
      <div className="body-container">
        <ul className="tabs-container">
          <li className="tab-item-container">
            <button
              type="button"
              className={`tab-btn ${defaultTabClass}`}
              onClick={() => setActiveTab("allProducts")}
            >
              All Products
            </button>
          </li>
          {tabsList.map((tab) => (
            <TabItem
              key={uuidv4()}
              tabName={tab}
              isActive={activeTab === tab}
              clickTabItem={clickTabItem}
            />
          ))}
        </ul>

        <ul className="products-list-container">
          {filteredProductsList.map((productDetails) => (
            <ProductItem
              key={productDetails.id}
              productDetails={productDetails}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
