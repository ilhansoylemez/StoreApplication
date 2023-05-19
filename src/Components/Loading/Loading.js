import React from 'react';
import Lottie from 'lottie-react-native';

function Animation() {
    return (
      <Lottie source={require('../../assests/loading.json')} autoPlay/>
    );
  }

  export default Animation;