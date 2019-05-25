import React, {useState} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'



const TabsContainer = styled.ul`
    overflow: unset;
    border: 1px solid #c4cdd7;
    border-radius: 25px;
    padding: 5px 4px;
    list-style-type: none;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    transition: 1s
    
    font-family: Roboto, sans-serif;
    
`
const Tab = styled.li`
    min-width: 80px;
    text-align: center;
    position: relative;
    
    z-index: 1;
    margin: 0;
    border: unset;
    border-radius: 25px;
    font-size: 14px;
    line-height: 1;
    color: #c4cdd7;
    text-transform: initial;
    background-color: unset;
    display: inline-block;
    
    &:hover{
        color: #F42958 !important;
        cursor: pointer;
    }
    
    &.active{
        box-shadow: 0px 15px 39px rgba(0, 0, 0, 0.2);
        background-color: #ffffff; 
        color: #F42958;
        transition: 1s;
    }
`

const imgStyle = {
    height: '35px'
}

/**
 * @description Styled tabs component
 * @property firstTab - First tab's text
 * @property secondTab - Second tab's text
 * @property activeIndex - returns active tab's index
 * @returns {*}
 * @constructor
 */

const TabBar = ({callback, activeIndex, leftSideSrc, rightSideSrc}) => {

    const [tabIndex, toggle] = useState(0);

    return (
        <TabsContainer>
            <Tab className={!tabIndex ? 'active' : ''} onClick={() => toggle(0)} >
                <img style={imgStyle} src={leftSideSrc} />
            </Tab>
            <Tab className={tabIndex ? 'active' : ''} onClick={() => toggle(1)} >
                <img style={imgStyle} src={rightSideSrc} />
            </Tab>
        </TabsContainer>
    );
};


TabBar.propTypes = {
    activeIndex: PropTypes.func
};


export default TabBar;