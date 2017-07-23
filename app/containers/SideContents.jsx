import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

export default class SideContents extends Component {
  render() {
    const listStyle = {
      padding: '7px',
      cursor: 'pointer',
      color: 'rgb(56, 89, 114)',
      fontWeight: '200',
    };

    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '200' }}>Musings</h1>
        <h3 style={listStyle}>React</h3>
        <h3 style={listStyle}>CSS</h3>
        <h3 style={listStyle}>DevOps</h3>
        <h3 style={listStyle}>Node.js</h3>
        <h3 style={listStyle}>Databases</h3>
      </div>
    );
  }
}