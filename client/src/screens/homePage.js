import React, { useEffect } from "react";
import "../css/homePage.css";
import Logo from "../assets/logo.png";
import logo from "../logo.svg";

const HomePage = () => {
  useEffect(() => {
    document.title = "King Cost";
  });

  return (
    <div>
      <div className="container">
        <div className="container-background">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        {/* <div>
          <h1>Công cụ theo dõi giá<br></br>cho Shopee, Tiki, Lazada</h1>
        </div> */}
        <div className="container-text">
          <h1>Theo dõi giá, Biểu đồ giá</h1>
        </div>
        <div className="container-input">
          <input placeholder="Dán link sản phẩm"></input>
        </div>
        <div>{/* Đây là chỗ biểu đồ */}</div>

        <h1 style={{ margin: 32 }}>Sản phẩm tương tự</h1>
        <div className="container-sameProduct">
          <div className="aaa">
            <div className="container-product">
              <div className="image">
                <img src={logo} alt="logo" />
              </div>
              <h5 className="product-name">Lorem ipsum dolor sit amet</h5>
              <div className="clear"></div>
              <span className="product-price">Giá từ: 25.000đ</span>
            </div>
          </div>
          <div className="aaa">
            <div className="container-product">
              <div className="image">
                <img src={logo} alt="logo" />
              </div>
              <h5 className="product-name">Lorem ipsum dolor sit amet</h5>
              <div className="clear"></div>
              <span className="product-price">Giá từ: 25.000đ</span>
            </div>
          </div>
          <div className="aaa">
            <div className="container-product">
              <div className="image">
                <img src={logo} alt="logo" />
              </div>
              <h5 className="product-name">Lorem ipsum dolor sit amet</h5>
              <div className="clear"></div>
              <span className="product-price">Giá từ: 25.000đ</span>
            </div>
          </div>
          <div className="aaa">
            <div className="container-product">
              <div className="image">
                <img src={logo} alt="logo" />
              </div>
              <h5 className="product-name">Lorem ipsum dolor sit amet</h5>
              <div className="clear"></div>
              <span className="product-price">Giá từ: 25.000đ</span>
            </div>
          </div>
          <div className="aaa">
            <div className="container-product">
              <div className="image">
                <img src={logo} alt="logo" />
              </div>
              <h5 className="product-name">Lorem ipsum dolor sit amet</h5>
              <div className="clear"></div>
              <span className="product-price">Giá từ: 25.000đ</span>
            </div>
          </div>

          <div>
            <button className="btn-next">
              <svg
                data-v-20ebe24e=""
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="icon-arrow"
              >
                <path
                  data-v-20ebe24e=""
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
