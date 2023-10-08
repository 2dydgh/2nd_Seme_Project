import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const BoxChangeButton = styled.button`
position: absolute;
width: 55px;
height: 55px;
background: #434b69;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 100%;
opacity: 80%;
`;

function BoxChange() {

  const scrollLeft = () => {
    console.log('Scroll Left Clicked'); // 이 줄을 추가
    var scrollableDiv = document.getElementById('scroll');
    scrollableDiv.scrollLeft -= 291;
}

const scrollRight = () => {
  console.log('Scroll Right Clicked'); // 이 줄을 추가
    var scrollableDiv = document.getElementById('scroll');
    scrollableDiv.scrollLeft += 291;
}

  return (
    <>
      <BoxChangeButton style={{ left: '1200px', top: '237px' }} onClick={scrollRight}>
         <FontAwesomeIcon icon={faAngleRight} color="black" />
      </BoxChangeButton>
      <BoxChangeButton style={{ left: '25px', top: '237px' }} onClick={scrollLeft}>
        <FontAwesomeIcon icon={faAngleLeft} color="black" />
      </BoxChangeButton>
    </>
  )
  
}

export default BoxChange;
