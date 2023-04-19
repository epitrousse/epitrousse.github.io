import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import psychosocialImg from '../../../../../assets/img/impacts/common/psychosocial.png';
import { fr as commonFr } from '../../../../../common/i18n/fr';
import Bullets from '../../../../../components/bullets/bullets';
import TitleSectionKit from '../../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';

export default function ChildrenPsychosocial() {
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
          <Link to={AppRoutes.ChildrenImpacts}>{commonFr.children}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <p>{fr.p1}</p>
        <p>{fr.promoteWellBeing.question}</p>
        <Bullets bullets={fr.promoteWellBeing.bullets} />
        <p>{fr.p2}</p>
        <p>{fr.p3}</p>
        <p>{fr.tips.title}</p>
        <Bullets bullets={fr.tips.bullets} />
        <p>{fr.p4}</p>
      </div>
    </div>
  );
}
