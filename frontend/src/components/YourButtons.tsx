import React from 'react'
import "./YourButtons.css";
import styled from "styled-components";
const Button = styled.button`
display: inline-block;
background-color: "brown";
color: white;
font-size: 1em;
margin-top:0.5em;
padding: 1.5em 6em;
border: 2px solid brown;
border-radius: 3px;
display: block;
`;

export default function YourButtons() {
    return (
        <div className = "YourButtons">
            <Button> Raise </Button>
            <Button> Check </Button>
            <Button> Fold </Button>
        </div>
    )
}
