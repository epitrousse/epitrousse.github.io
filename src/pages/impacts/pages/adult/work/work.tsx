import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import workImg from '../../../../../assets/img/impacts/adults/work.png';
import { fr as commonFr } from '../../../../../common/i18n/fr';
import Bullets from '../../../../../components/bullets/bullets';
import TitleSectionKit from '../../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';

export default function Work() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={workImg} title={fr.title}></TitleSectionKit>
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
        <p>{fr.notRecommendedJob.title}</p>
        <Bullets bullets={fr.notRecommendedJob.bullets} />
        <p>{fr.generalTips.title}</p>
        <Bullets bullets={fr.generalTips.bullets} />
        <p>{fr.p3}</p>
        <p>{fr.p4}</p>
        <p>{fr.p5}</p>
        <p>{fr.p6}</p>
        <p>{fr.p7}</p>
        <p>{fr.p8}</p>
        <Typography.Title level={3}>{fr.ss1.title}</Typography.Title>
        <p>{fr.ss1.p1}</p>
        <Bullets bullets={fr.ss1.bullets} />{' '}
      </div>
    </div>
  );
}
