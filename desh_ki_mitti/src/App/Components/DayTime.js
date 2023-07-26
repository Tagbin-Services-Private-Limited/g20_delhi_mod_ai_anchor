import React from "react";
import styled, { keyframes } from "styled-components";
import { withTranslation } from "react-i18next";
import { Caption1, Heading1 } from "./FontStyle";

import Weather1 from "../Assets/img/HomeScreen/img3.png";
import Weather1Icon from "../Assets/img/HomeScreen/img4.png";
import Weather2 from "../Assets/img/HomeScreen/img5.png";
import Weather2Icon from "../Assets/img/HomeScreen/img6.png";
import Weather3 from "../Assets/img/HomeScreen/img7.png";
import Weather3Icon from "../Assets/img/HomeScreen/img8.png";

const WeatherData = [
  { text: "good_morning", bg: Weather1, icon: Weather1Icon },
  { text: "good_afternoon", bg: Weather2, icon: Weather2Icon },
  { text: "good_evening", bg: Weather3, icon: Weather3Icon },
];

class DayTime extends React.Component {
  constructor() {
    super();
    var today = new Date(),
      hour = today.getHours();

    this.state = {
      currentWeather: 0,
      currentTimeHour: hour,
    };
  }

  componentDidMount() {
    if (this.state.currentTimeHour < 12) {
      this.setState({ currentWeather: 0 });
    } else if (this.state.currentTimeHour >= 12 && this.state.currentTimeHour <= 17) {
      this.setState({ currentWeather: 1 });
    } else if (this.state.currentTimeHour >= 17 && this.state.currentTimeHour <= 24) {
      this.setState({ currentWeather: 2 });
    }
  }

  toCamelCase(str) {
    return str.split(' ').map(function (word, index) {
      // If it is the first word make sure to lowercase all the chars.
      if (index == 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  }
  render() {
    const { t } = this.props;
    return (
      <CardDiv
        className={`p-3 my-auto ${this.props.className}`}
        style={{
          backgroundImage: `url(${WeatherData[this.state.currentWeather].bg})`,
        }}
      >
        <div className="h-100 d-flex align-items-center w-75">
          <div>
            <Heading1>
              {t(WeatherData[this.state.currentWeather].text)}
              {this.props.name ? ", " + this.toCamelCase(this.props.name) + "!" : null}
            </Heading1>
            <Caption1>{this.props.captionText}</Caption1>
          </div>
        </div>

        <IconImage style={{ backgroundImage: `url(${WeatherData[this.state.currentWeather].icon})` }} />
      </CardDiv>
    );
  }
}

export default withTranslation()(DayTime);

const CardDiv = styled.div`
  border-radius: 0.75rem;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const rotate = keyframes`
0% {transform: translateX(10px)}
  100% {transform: translateX(0px) ;}
  0% {transform: translateX(10px) ;}
`;

const IconImage = styled.div`
  background-size: contain;
  height: 8rem;
  width: 8rem;
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  animation: ${rotate} linear infinite;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  @media only screen and (max-width:767px){
     height: 4rem;
    width: 4rem;
    top: 26%;
    transform: translateY(-50%);
  }
`;
