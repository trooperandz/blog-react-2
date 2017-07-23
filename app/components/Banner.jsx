import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Banner = () => {
  return (
    <div style={{ backgroundImage: 'url("../img/bake_grayscale_cropped.jpeg' }}>
      <Grid fluid>
        <Row style={{ height: '413px' }}>
          <Col lg={12}>
            <h2 style={{ textAlign: 'center', color: '#fff', fontSize: '40px', padding: '0', fontFamily: 'Roboto, sans-serif', fontWeight: '200' }}>M . H</h2>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Banner;