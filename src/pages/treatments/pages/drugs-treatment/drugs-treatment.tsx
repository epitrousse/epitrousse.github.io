import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import drugsTreatmentImg from '../../../../assets/img/treatments/drugs-treatments.jpg';
import { fr as commonFr } from '../../../../common/i18n/fr';
import Bullets from '../../../../components/bullets/bullets';
import TitleSectionKit from '../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';

export default function DrugsTreatment() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit
        imgTopic={drugsTreatmentImg}
        title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={AppRoutes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Treatments}>{commonFr.treatments}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.shortTitle}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <p>{fr.s1.p1}</p>
        <Typography.Title level={2}>{fr.s2.title}</Typography.Title>
        <p>{fr.s2.p1}</p>
        <Bullets bullets={fr.s3.bullets} />
        <Typography.Title level={2}>{fr.s4.title}</Typography.Title>
        <Bullets bullets={fr.s4.bullets} />
        <Typography.Title level={2}>{fr.s5.title}</Typography.Title>
        <p>{fr.s5.p1}</p>
        <p>{fr.s5.p2}</p>
        <Typography.Title level={2}>{fr.s6.title}</Typography.Title>
        <p>{fr.s6.p1}</p>
        <p>{fr.s6.p2}</p>
        <Typography.Title level={2}>{fr.s7.title}</Typography.Title>
        <p>{fr.s7.p1}</p>
      </div>
    </div>
  );
}
