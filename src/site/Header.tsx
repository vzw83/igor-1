import React from 'react';
import styled from "styled-components";

type HeaderPropsType = {
    title: string
}
export const Header = (props: HeaderPropsType) => {
    return (
        <HeaderStyled>{props.title}</HeaderStyled>
    );
};

const HeaderStyled = styled.div`
`