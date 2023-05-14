import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import lifeInsuranceImg from '../../../../../assets/img/impacts/adults/life-insurance.png';
import { fr as commonFr } from '../../../../../common/i18n/fr';
import Bullets from '../../../../../components/bullets/bullets';
import TitleSectionKit from '../../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';

export default function LifeInsurance() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit
        imgTopic={lifeInsuranceImg}
        title={fr.title}></TitleSectionKit>
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
        <Typography.Title level={3}>{fr.sudepSection.title}</Typography.Title>
        <p>{fr.sudepSection.p1}</p>
        <p>{fr.sudepSection.p2}</p>

        <Typography.Title level={4}>
          {fr.sudepSection.subsection1.title}
        </Typography.Title>
        <p>{fr.sudepSection.subsection1.p1}</p>
        <Bullets bullets={fr.sudepSection.subsection1.bullets}></Bullets>

        <Typography.Title level={4}>
          {fr.sudepSection.subsection2.title}
        </Typography.Title>
        <p>{fr.sudepSection.subsection2.p1}</p>
        <Bullets bullets={fr.sudepSection.subsection2.bullets}></Bullets>

        <Typography.Title level={4}>
          {fr.sudepSection.subsection3.title}
        </Typography.Title>
        <p>{fr.sudepSection.subsection3.p1}</p>
        <Bullets bullets={fr.sudepSection.subsection3.bullets}></Bullets>

        <p>{fr.sudepSection.p3}</p>
      </div>
    </div>
  );
}
