import React from 'react';

import {
  StyleSheet,
} from 'react-native';

export const styleConstants = {
  primaryColor: '#1abc9c',
  facebookColor: '#3b5998',
  googleColor: '#F44336',
  whiteColor: '#F4F4F8',
  redColor: '#FE4A49',
  yellowColor: '#E9D758',
  blueColor: '#28536B',
  lightGreyColor: '#e1e8ee',
  progressRadius: 40,

};

export var styles = StyleSheet.create({

  content: {
    paddingTop: 20,
    flex: 1,
  },

  logoLarge: {

    fontFamily: 'Pacifico',
    fontSize: 80,
    color: styleConstants.primaryColor,
    paddingLeft: 20,
    paddingRight: 20,

  },

  navBar: {
    backgroundColor: "white",
  },

  navBarTitle: {
    color: styleConstants.primaryColor,
  },

  roundedButton: {

    backgroundColor: styleConstants.primaryColor,
    borderColor: styleConstants.primaryColor,
    borderWidth: 2,
    borderRadius: 22,

  },

  buttonText: {

    color: "white",
    fontWeight: "bold",
    fontSize: 14,

  },

});
