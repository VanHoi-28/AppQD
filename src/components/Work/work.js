import React from 'react';
import { Card, Row, Col, Image } from 'antd';
import "../Work/style.css"
const Work = () => (
  <Card 
    className='firt'
  >
    <div className='title'>
      <p>Công việc hôm nay</p>
      <img  src='./expand-solid 1.svg'/>
    </div>
    <Row className='work'>
      <Col  className='child' span={8}>
        <img className='img' src='./Icon.svg' />
          <div className='text'>
            <p className='p1'>Chưa làm xong</p>
            <p className='p2'>Hôm nay</p>
          </div>
      </Col>
      <Col className='child' span={8}>
        <img className='img' src='./Icon2.svg' />
        <div className='text'>
            <p className='p1'>0 công việc</p>
            <p className='p2'>Quá hạn</p>
          </div>
      </Col>
      <Col className='child' span={8}>
        <img className='img' src='./Icon3.svg' />
        <div className='text'>
            <p className='p1'>3 công việc</p>
            <p className='p2'>Đến hạn</p>
          </div>
      </Col>
    </Row>
    <Row className='work'>
      <Col className='child' span={8}>
        <img className='img' src='./Icon4.svg' />
        <div className='text'>
            <p className='p1'>1 công việc</p>
            <p className='p2'>Sắp đến hạn</p>
          </div>
      </Col>
      <Col className='child' span={8}>
        <img className='img' src='./Icon5.svg' />
        <div className='text'>
            <p className='p1'>1 Công việc</p>
            <p className='p2'>Chờ tôi duyệt</p>
          </div>
      </Col>
      <Col className='child' span={8}>
        <img className='img' src='./Icon6.svg' />
        <div className='text'>
            <p className='p1'>1 công việc</p>
            <p className='p2'>Cần giao</p>
          </div>
      </Col>
    </Row>
  </Card >
);
export default Work;