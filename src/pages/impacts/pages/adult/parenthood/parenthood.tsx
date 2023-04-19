import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import parenthoodImg from '../../../../../assets/img/impacts/adults/parenthood.png';
import pregnancyImg from '../../../../../assets/img/impacts/adults/pregnancy.png';
import { fr as commonFr } from '../../../../../common/i18n/fr';
import Bullets from '../../../../../components/bullets/bullets';
import TitleSectionKit from '../../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';
import './parenthood.scss';

export default function Parenthood() {
  return (
    <div className="max-viewport-width margin-page-view parenthood">
      <TitleSectionKit
        imgTopic={parenthoodImg}
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
        <img className="pregnancy-img" src={pregnancyImg} />
        <p>{fr.p3}</p>
        <p>{fr.tips.title}</p>
        <Bullets bullets={fr.tips.bullets} />
      </div>
    </div>
  );
}
