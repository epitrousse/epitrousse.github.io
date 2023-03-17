import { Breadcrumb, Col, Image, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import studentsGroup from '../../assets/img/group.jpg';
import { AppRoutes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import './about.scss';
import { fr } from './i18n/fr';

export default function About() {
  return (
    <div className="max-viewport-width margin-page-view about">
      <Typography.Title level={1}>{fr.title}</Typography.Title>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={AppRoutes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{commonFr.about}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <div>
          <Typography.Title className="margin-bottom" level={2}>
            {fr.ourTeam.title}
          </Typography.Title>
          <Row>
            <Col className="flex-center" xs={24} lg={15}>
              <Image
                className="group-img"
                preview={false}
                src={studentsGroup}
              />
            </Col>
            <Col className="padding flex-center" xs={24} lg={9}>
              <p className="text-justify">{fr.ourTeam.text}</p>
            </Col>
          </Row>
        </div>

        <div>
          <Typography.Title className="our-mission-title" level={2}>
            {fr.ourMission.title}
          </Typography.Title>
          <p>{fr.ourMission.text}</p>
        </div>
      </div>
    </div>
  );
}
