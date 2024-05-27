import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";
import { ReturnButton } from '../styles/Global.styled';

function ScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <ReturnButton onClick={scrollToTop}>Back to Top<FaLongArrowAltUp /></ReturnButton>
  );
}

export default ScrollButton;