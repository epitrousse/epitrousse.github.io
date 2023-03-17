import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import schoolImg from '../../../../../assets/img/impacts/children/school.png';
import { fr as commonFr } from '../../../../../common/i18n/fr';
import Bullets from '../../../../../components/bullets/bullets';
import TitleSectionKit from '../../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';

export default function School() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={schoolImg} title={fr.title}></TitleSectionKit>
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
        <p>{fr.tellToSchool.p1}</p>
        <Bullets bullets={fr.tellToSchool.bullets} />
        <p>{fr.schoolServices.p1}</p>
        <Bullets bullets={fr.schoolServices.bullets} />
        <p>{fr.p2}</p>
      </div>
    </div>
  );
}
