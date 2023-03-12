import { Breadcrumb, Col, Row, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../../app.scss';
import { Routes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';
import './kit.scss';

export default function Kit() {
  const navigate = useNavigate();

  const displayTile = (text, img, path) => (
    <Col lg={8} md={12} xs={24}>
      <div className="box" onClick={() => navigate(path)}>
        <div className={`background-img ${img} flex-center`}>
          <div className="background-layer flex-center">
            <Typography.Text className="topic-title">{text}</Typography.Text>
          </div>
        </div>
      </div>
    </Col>
  );

  return (
    <div className="max-viewport-width margin-page-view kit">
      <Typography.Title level={1}>{fr.title}</Typography.Title>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={Routes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{commonFr.kit}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-container">
        <Typography.Title
          level={2}
          style={{ marginTop: 0, marginBottom: '2rem' }}>
          {fr.whatToConsult}
        </Typography.Title>
        <Row gutter={[20, 16]}>
          {displayTile(fr.aboutEpilepsy, 'topic-1', Routes.AboutEpilepsy)}
          {displayTile(fr.beWitness, 'topic-2', Routes.BeWitness)}
          {displayTile(fr.treatments, 'topic-3', Routes.Treatments)}
          {displayTile(fr.impacts, 'topic-4', Routes.Impacts)}
          {displayTile(fr.mythsAndFacts, 'topic-5', Routes.MythsAndFacts)}
          {displayTile(fr.tools, 'topic-6', Routes.Tools)}
        </Row>
      </div>
    </div>
  );
}
