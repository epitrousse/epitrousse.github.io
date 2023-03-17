import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import drivingImg from '../../../../../assets/img/impacts/adults/driving.png';
import { fr as commonFr } from '../../../../../common/i18n/fr';
import Bullets from '../../../../../components/bullets/bullets';
import TitleSectionKit from '../../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';

export default function Driving() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={drivingImg} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={AppRoutes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Impacts}>{commonFr.impacts}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.AdultsImpacts}>{commonFr.adult}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <p>{fr.p1}</p>
        <p>{fr.p2}</p>
        <p>{fr.p3}</p>
        <p>{fr.p4}</p>
        <Typography.Title level={3}>{fr.ss1.title}</Typography.Title>
        <Typography.Title level={4}>
          {fr.ss1.classes.class5.p1}
        </Typography.Title>
        <p>{fr.ss1.classes.class5.p2}</p>
        <p>{fr.ss1.classes.class5.exceptions.text}</p>
        <Bullets bullets={fr.ss1.classes.class5.exceptions.bullets} />
        <p>{fr.ss1.classes.class5.p3}</p>
        <p>{fr.ss1.classes.class5.p4}</p>
        <Typography.Title level={4}>
          {fr.ss1.classes.class1To4.title}
        </Typography.Title>
        <Bullets bullets={fr.ss1.classes.class1To4.bullets} />
        <p>{fr.ss1.classes.class1To4.exceptions.title}</p>
        <Bullets bullets={fr.ss1.classes.class1To4.exceptions.bullets} />
      </div>
    </div>
  );
}
