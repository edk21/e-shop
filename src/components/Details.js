import React from 'react'
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Details() {
    return (
        <ProductConsumer>
            {(value) => {
                 const {id, company, img, info, price, title, inCart } = value.detailProduct;
                 return (
                     <div className="container py-5">
                         {/* product title */ }
                         <div className="row">
                             <div className="col-10 mx-auto text-center text-slanted text-blue">
                                 <h1>{title}</h1>
                             </div>
                         </div>
                         {/* end title and next product info*/ }
                         <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 text-capiralize">
                                <img src={img} alt="product" className="img-fluid"/>
                            </div>

                           {/* product text */ }
                            <div className="col-10 mx-auto col-md-6 my-3 text-capiralize">
                                <h2>Model: {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by: 
                                    <span className="text-uppercase">
                                        {company}
                                    </span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>price: 
                                        <span>
                                            {price}
                                        </span>
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    some info about the product:
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>
                                {/* buttons  */}
                                <div>
                                    <Link to="/"> 
                                    <ButtonContainer>
                                        Back to products
                                    </ButtonContainer>
                                    </Link>
                                     <ButtonContainer cart 
                                     disabled={inCart? true : false}
                                     onClick={() => {
                                         value.addToCart(id);
                                         value.openModal(id);
                                     }}>
                                        {inCart ? "inCart" : "add to Cart"}
                                    </ButtonContainer> 
                                </div>
                            </div>
                         </div>
                     </div>
                 )
            }}
        </ProductConsumer>
    )
}

export default Details;

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${props => props.cart? "var(--mainYellow)" : 
    "var(--lightBlue)"};
    color: ${props => props.cart? "var(--mainYellow)" : 
    "var(--lightBlue)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: ${props => props.cart? "var(--mainYellow)" :  "var(--lightBlue)"};
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
`;
