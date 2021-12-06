import React from 'react'
import styles from './stylesheets.module.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 4em;
    background: papayawhip;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Modules = () => {
    return (
        <Wrapper>
            <h1 className={styles.header}>CSS Modules</h1>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </Wrapper>
    )
}

export default Modules
