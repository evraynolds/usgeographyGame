import React, { useState, useEffect } from 'react';
import './App.scss';
import USMap from './assets/US_Map.svg?react';
import StateData from './data.js'

function App() {
    const [stateContent, setStateContent] = useState(<div></div>);
    const [shownStatesArr, setShownStatesArr] = useState([]);
    const [statesToShowArr, setStatesToShowArr] = useState(statesArr);
    const [displayedState, setdisplayedState] = useState('');
    const [correctNum, setCorrectNum] = useState(0);
  
    useEffect(() => {
      if(shownStatesArr.length >= 51 ){
        if(correctNum < 10){
            setdisplayedState('Try again!')
          }
          else if(correctNum < 25 && correctNum >= 10){
            setdisplayedState('Keep trying.')
          }
          else if(correctNum < 40 && correctNum >=  25){
            setdisplayedState('Not Bad');
          }
          else if(correctNum <= 51 && correctNum >=  40){
            setdisplayedState('You know your states!')
          }
      }else{
        const ranNum = Math.floor(Math.random() * Math.floor(statesToShowArr.length));
        setdisplayedState(statesToShowArr[ranNum]);
        setShownStatesArr(shownStatesArr.concat(statesToShowArr[ranNum]))
      }
    }, [statesToShowArr]);
  
    let infoBox = <div></div>;
    const getStateElements = () => {
      infoBox = document.getElementById('info-box');
      const stateSVGElements = document.getElementsByClassName('states');
      const stateSVGArr = Array.from(stateSVGElements);
    };
  
    const setPopupDetails = (info) => {
      setStateContent(
        <div>
          <h3>{info.denounced[0].name}</h3>
          <h4>{info.denounced[0].title}</h4>
          <p>{info.denounced[0].misdeed}</p>
        </div>
      );
    };
  
    const handleStateClick = (e) => {
        if(e.target.id === displayedState){
          e.target.classList.add('correct');
          setCorrectNum(correctNum+1);
        } else {
          let ele = document.getElementById(displayedState);
          if(ele){
            ele.classList.add('wrong');
          }
        }
        selectNewState();
    }
  
    const selectNewState = () => {
      let statesToShow = [];
      for(let i in statesArr) {   
          if(shownStatesArr.indexOf(statesArr[i]) == -1){
              statesToShow.push(statesArr[i]);
          }
      }
      setStatesToShowArr(statesToShow);
    }
  console.log(typeof USMap)
    document.addEventListener("DOMContentLoaded", getStateElements);
    return (
      <div className='geo-game__container'>
        <div className='geo-game__info'>
          <div className='geo-game__prompt'>{displayedState}</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className='geo-game__score'>{correctNum}/51</div>
        </div>
        <div className='geo-game__map'>
          {/* {typeof USMap === 'function' ? <USMap /> : <p>Broken SVG import</p>} */}
          <USMap className={'map'} onClick={handleStateClick} />
        </div> 
      </div>
    );
  }

export default App

const statesArr = [
  'Alabama',
'Alaska',
'Arizona',
'Arkansas',
'California',
'Colorado',
'Connecticut',
'Delaware',
'Florida',
'Georgia',
'Hawaii',
'Idaho',
'Illinois',
'Indiana',
'Iowa',
'Kansas',
'Kentucky',
'Louisiana',
'Maine',
'Maryland',
'Massachusetts',
'Michigan',
'Minnesota',
'Mississippi',
'Missouri',
'Montana',
'Nebraska',
'Nevada',
'New Hampshire',
'New Jersey',
'New Mexico',
'New York',
'North Carolina',
'North Dakota',
'Ohio',
'Oklahoma',
'Oregon',
'Pennsylvania',
'Rhode Island',
'South Carolina',
'South Dakota',
'Tennessee',
'Texas',
'Utah',
'Vermont',
'Virginia',
'Washington',
'West Virginia',
'Wisconsin',
'Wyoming',
'District of Columbia'
]