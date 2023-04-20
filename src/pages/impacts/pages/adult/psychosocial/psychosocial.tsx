import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import psychosocialImg from '../../../../../assets/img/impacts/adults/psychosocial.png';
import { fr as commonFr } from '../../../../../common/i18n/fr';
import TitleSectionKit from '../../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';

export default function AdultPsychosocial() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit
        imgTopic={psychosocialImg}
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
        <p>
          <span>{fr.p3.before}</span>
          <a href={fr.p3.link} target="_blank" rel="noopener noreferrer">
            {fr.p3.link}
          </a>
          <span>{fr.p3.after}</span>
        </p>
      </div>
    </div>
  );
}
