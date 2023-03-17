import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import sportImg from '../../../../../assets/img/impacts/adults/sport.png';
import { fr as commonFr } from '../../../../../common/i18n/fr';
import Bullets from '../../../../../components/bullets/bullets';
import TitleSectionKit from '../../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';

export default function Sport() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={sportImg} title={fr.title}></TitleSectionKit>
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
        <p>{fr.bestSport.p1}</p>
        <Bullets bullets={fr.bestSport.bullets} />
        <p>{fr.bestSport.p2}</p>
        <p>{fr.notRecommendedSports.p1}</p>
        <Bullets bullets={fr.notRecommendedSports.bullets} />
        <p>{fr.notRecommendedSports.p2}</p>
      </div>
    </div>
  );
}
