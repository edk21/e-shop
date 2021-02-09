import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { Link, MemoryRouter } from "react-router-dom";

class Modal extends Component {
    render() { 
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else{
                      return(  
                      <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>Item added to the cart</h5>
                                        <img src={img} alt="product" className="img-fluid"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: €    {price}</h5>
                                        <MemoryRouter>
                                        <Link to="/">
                                            <ButtonContainer onClick={() =>
                                            closeModal()}>
                                                store
                                            </ButtonContainer>
                                        </Link>
                                        </MemoryRouter>
                                        <MemoryRouter>
                                        <Link to="/Cart">
                                            <ButtonContainer cart onClick={() =>
                                            closeModal()}>
                                                Go to cart
                                            </ButtonContainer>
                                        </Link>
                                        </MemoryRouter>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                      );
                    }
                }}
            </ProductConsumer>
        );
    }
}
 
export default Modal;

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;