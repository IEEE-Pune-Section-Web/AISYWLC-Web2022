import React from "react";
import Container from "../../Layout/Container";
import CTA_button from "../CTA_button";
import Counter from "./Hero/Counter";
import Info from "./Hero/Info";
import "./Styles/Hero.css";

let ticketIll= <svg className="illus" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.6031 20.2722L7.61313 20.279L7.62332 20.2856C8.23432 20.6801 8.60328 20.8791 9.23542 21.1448L9.24827 21.1502L9.26127 21.1553C9.83148 21.3765 10.1697 21.4834 10.7393 21.6149L10.7517 21.6178L10.7642 21.6203C11.333 21.7364 11.6736 21.7838 12.2453 21.8182L12.2562 21.8189L12.2671 21.8193C12.9556 21.8457 13.3457 21.8233 13.9784 21.7444L13.9959 21.7423L14.0133 21.7395C14.6765 21.6329 15.0742 21.5452 15.7219 21.3281L15.7298 21.3254L15.7378 21.3226C16.4273 21.0784 16.8215 20.8873 17.4575 20.516L17.4747 20.5059L17.4916 20.4951C18.16 20.0681 18.5516 19.7719 19.1931 19.1592L19.217 19.1364L19.2393 19.1121C19.7154 18.5932 19.9893 18.2666 20.4215 17.647L20.442 17.6177L20.4603 17.587C20.8062 17.0067 21.0067 16.6295 21.2512 16.0344L21.2512 16.0344C21.2986 15.919 21.3416 15.8011 21.3798 15.6809C21.4722 15.3895 21.726 14.5665 21.801 13.9817C21.8877 13.3048 21.9017 12.8949 21.8863 12.2162C21.8701 11.5069 21.8255 11.1414 21.631 10.4597L20.7409 10.7137L21.631 10.4597C21.6105 10.3878 21.591 10.3184 21.572 10.2508C21.4422 9.78812 21.3357 9.4089 21.0709 8.84483C20.7827 8.23076 20.6165 7.96145 20.2889 7.46392C20.1469 7.24818 20.0166 7.06953 19.8848 6.90588L22.1931 4.59762C23.7552 3.03552 26.2878 3.03552 27.8499 4.59762L55.4872 32.2349C57.0493 33.797 57.0493 36.3297 55.4872 37.8918L37.9583 55.4208C36.3962 56.9829 33.8635 56.9829 32.3014 55.4208L4.66409 27.7834C3.102 26.2213 3.102 23.6887 4.6641 22.1266L6.97538 19.8153C7.16289 19.9648 7.36074 20.1072 7.6031 20.2722Z" stroke="white" stroke-width="2"/>
<line x1="35.3751" y1="10.7089" x2="10.775" y2="35.3089" stroke="white" stroke-width="2" stroke-dasharray="2 2"/>
</svg>

const calenderIll= <svg className="illus" width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.4093 5.17969H5.03542C3.19127 5.17969 1.69629 6.67467 1.69629 8.51882V31.8927C1.69629 33.7369 3.19127 35.2319 5.03542 35.2319H28.4093C30.2535 35.2319 31.7485 33.7369 31.7485 31.8927V8.51882C31.7485 6.67467 30.2535 5.17969 28.4093 5.17969Z" stroke="#00629B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.4014 1.84058V8.51884" stroke="#00629B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0439 1.84058V8.51884" stroke="#00629B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.69629 15.1971H31.7485" stroke="#00629B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const mapIll=<svg className="illus" width="33" height="44" viewBox="0 0 33 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.3038 16.0322C32.3038 28.2963 16.5357 43.1884 16.5357 43.1884C16.5357 43.1884 0.767578 28.2963 0.767578 16.0322C0.767578 11.8503 2.42886 7.83957 5.38595 4.88247C8.34305 1.92538 12.3537 0.264099 16.5357 0.264099C20.7177 0.264099 24.7283 1.92538 27.6854 4.88247C30.6425 7.83957 32.3038 11.8503 32.3038 16.0322Z" fill="#00629B"/>
<path d="M16.5353 24.1739C21.1457 24.1739 24.8832 20.4365 24.8832 15.8261C24.8832 11.2157 21.1457 7.47827 16.5353 7.47827C11.9249 7.47827 8.1875 11.2157 8.1875 15.8261C8.1875 20.4365 11.9249 24.1739 16.5353 24.1739Z" fill="white"/>
</svg>



const Hero = () => {
  return (
    <Container className="hero" >
      <div className="hero__content" >
        <div className="hero__branding">
          <img src="./Assets/IEEE.png" alt="IEEE Logo" />
        </div>
          <h1 className="hero__title">
            ALL <span className="india">INDIA</span> STUDENT YOUNG PROFESSIONAL
            WOMEN IN ENGINEERING AND LIFE MEMBER
            <span className="blue"> CONGRESS '22</span>
          </h1>
          <div className="hero__info">
            <Info icon={calenderIll} key="date" text={"October 8th, 2022"}/>
            <Info icon={mapIll} key="venue" text={"College of Engineering Pune, Pune"}/>
          </div>
          <div className="hero__counter">
            <Counter/>
          </div>
          <div className="hero__cta">
            <CTA_button icon={ticketIll}>Buy Now</CTA_button>
          </div>
      </div>
      <div className="hero__ticket"></div>
    </Container>
  );
};

export default Hero;
