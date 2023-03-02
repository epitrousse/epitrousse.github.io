import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import topic2 from '../../assets/img/topic-2.jpg';
import Bullets from '../../components/bullets/bullets';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { Routes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';

export default function BeWitness() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={topic2} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={Routes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <p>{fr.p1}</p>
        <p>{fr.p2}</p>
        <p>{fr.p3}</p>
        <Typography.Title level={3}>{fr.ss1.title}</Typography.Title>
        <Bullets bullets={fr.ss1.bullets} />
        <Typography.Title level={3}>{fr.ss2.title}</Typography.Title>
        <Typography.Title level={4}>{fr.ss2.sss1.title}</Typography.Title>
        <Bullets bullets={fr.ss2.sss1.bullets} />
        <Typography.Title level={4}>{fr.ss2.sss2.title}</Typography.Title>
        <Bullets bullets={fr.ss2.sss2.bullets} />
        <Typography.Title level={4}>{fr.ss2.sss3.title}</Typography.Title>
        <Bullets bullets={fr.ss2.sss3.bullets} />
        <Typography.Title level={4}>{fr.ss2.sss4.title}</Typography.Title>
        <Bullets bullets={fr.ss2.sss4.bullets} />
        <Typography.Title level={3}>{fr.ss3.title}</Typography.Title>
        <Bullets bullets={fr.ss3.bullets} />
      </div>
    </div>
  );
}
