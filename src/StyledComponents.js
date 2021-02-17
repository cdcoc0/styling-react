import React from 'react';
import styled, {css} from 'styled-components';

const sizes = {
    desktop: 1024,
    tablet: 768 
};

//size 객체에 따라 자동으로 media 쿼리 함수 생성
//참고: http://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css `
    @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
    }`;
    return acc;
}, {});

// props로 넣어 준 값을 직접 전달해줄 수 있음
const Box = styled.div `
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    
    //responsive
    width: 1024px;
    margin: 0 auto;
    /* @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%
    } */
    ${media.desktop`width: 768;`}
    ${media.tablet`width: 100%;`};
`;

const Button = styled.button `
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    ${props =>
    props.inverted && 
    css `
        background: none
        border: 2px solid white;
        color: white;
        &:hover {
            background: white;
            color: black;
        }
    `};

    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponents = () => {
    return (
    <Box color="black">
        <Button>Hello😁</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
    );
}

export default StyledComponents;