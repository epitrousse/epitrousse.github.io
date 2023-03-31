import { Button, Col, Divider, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import '../../app.scss';
import briefcaseImg from '../../assets/img/home/briefcase.png';
import HomePictures from '../../components/home-pictures/home-pictures';
import './home.scss';
import { fr } from './i18n/fr';

export default function Home() {
  return (
    <>
      <HomePictures />
      <Space
        className="full-width"
        align="center"
        direction="vertical"
        size="middle">
        <Typography.Title className="home-title">{fr.welcome}</Typography.Title>
        <p className="home-description">{fr.intro}</p>
        <Button size="large" type="primary" style={{ marginBottom: '40px' }}>
          <div className="goToKitButton">
            <img className="briefcase" src={briefcaseImg}></img>
            <Link className="linkToKit" to="/trousse">
              {fr.goToKit}
            </Link>
          </div>
        </Button>
      </Space>
      <Divider
        style={{
          minWidth: '80%',
          width: '80%',
          margin: '0 auto 0 auto'
        }}></Divider>
      <div className="max-viewport-width messages-container">
        <Row>
          <Col xs={24} sm={11} className="flex-center home-cols">
            <p>{fr.mission}</p>
          </Col>
          <Col span={2} className="home-grid-divider flex-center">
            <Divider type="vertical" style={{ height: '100%' }} />
          </Col>
          <Col
            xs={24}
            sm={11}
            className="flex-center home-cols"
            style={{ flexDirection: 'column' }}>
            <p style={{ fontStyle: 'italic' }}>{fr.quote}</p>
            <div className="quote-from">{fr.quoteFrom}</div>
          </Col>
        </Row>
      </div>
    </>
  );
}
