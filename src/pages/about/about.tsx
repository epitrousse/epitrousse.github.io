import { Breadcrumb, Image, Typography } from 'antd';
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
          <Typography.Title className="our-team-title" level={2}>
            {fr.ourTeam.title}
          </Typography.Title>
          <div className="flex-center">
            <Image className="group-img" preview={false} src={studentsGroup} />
          </div>
          <div className="about-us-section">
            <p>{fr.ourTeam.text}</p>
          </div>
        </div>

        <div>
          <Typography.Title className="our-mission-title" level={2}>
            {fr.ourMission.title}
          </Typography.Title>
          <p>{fr.ourMission.p1}</p>
          <p>{fr.ourMission.p2}</p>
          <p>{fr.ourMission.p3}</p>
        </div>
      </div>
    </div>
  );
}
