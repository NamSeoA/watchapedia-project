import React, {ReactNode} from "react";
import ReactSlick, { Settings } from 'react-slick';
import styled from "@emotion/styled";
import { css } from '@emotion/react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md' // 좌우 화살표

// pos : positon 받음
const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
  padding: 16px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background-color: #fff;
  ${({ pos }) => pos === 'left' ? css`left: 0; transform: translate(-50%, -50%)` : css`right: 0; transform: translate(50%, -50%)`};
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;


const DEFAULT_SETTINGS: Settings = {
    dots: false,        // 하단 인디케이터
    arrows: true,       // 좌우 화살표
    infinite: false,    // 마지막 슬라이드에서 다시 처음으로 가게하는
    speed: 500,
    slidesToShow: 5,    // 슬라이드당 표시될 개수
    slidesToScroll: 5,  // 스크롤 될 때마다 표시될 수
    swipe: true,
    draggable:true,
    prevArrow:(         // 커스텀 화살표
        <ArrowButton>
            <MdArrowBackIos />
        </ArrowButton>
    ),
    nextArrow:(
        <ArrowButton>
            <MdArrowForwardIos />
        </ArrowButton>
    )
}

interface Props {
    settings?: Settings;
    children?: ReactNode | ReactNode[];
}

const Slider : React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => {
    return(
        // 옵션으로 들어갈 객체
        <ReactSlick {...settings}>
            {children}
        </ReactSlick>
    )
}

export default Slider;