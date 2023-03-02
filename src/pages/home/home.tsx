import { Button, Col, Divider, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import '../../app.scss';
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
        <Typography.Text className="home-description">
          {fr.intro}
        </Typography.Text>
        <Button size="large" type="primary" style={{ marginBottom: '40px' }}>
          <Link to="/trousse">{fr.goToKit}</Link>
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
            <Typography.Text>{fr.mission}</Typography.Text>
          </Col>
          <Col span={2} className="home-grid-divider flex-center">
            <Divider type="vertical" style={{ height: '100%' }} />
          </Col>
          <Col
            xs={24}
            sm={11}
            className="flex-center home-cols"
            style={{ flexDirection: 'column' }}>
            <Typography.Text strong italic>
              {fr.quote}
            </Typography.Text>
            <Typography.Text style={{ marginTop: '10px' }}>
              {fr.quoteFrom}
            </Typography.Text>
          </Col>
        </Row>
      </div>
    </>
  );
}
