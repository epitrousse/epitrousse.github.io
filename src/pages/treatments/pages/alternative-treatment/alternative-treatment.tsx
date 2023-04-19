import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import alternativeTreatmentImg from '../../../../assets/img/treatments/alternative-treatments.jpg';
import { fr as commonFr } from '../../../../common/i18n/fr';
import TitleSectionKit from '../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';

interface AlternativeType {
  title: string;
  p1: string;
}

export default function AlternativeTreatment() {
  const displaySurgeryTypes = (surgeryTypes: AlternativeType[]) =>
    surgeryTypes.map((surgeryType) => (
      <div key={surgeryType.title}>
        <Typography.Title level={2}>{surgeryType.title}</Typography.Title>
        <p>{surgeryType.p1}</p>
      </div>
    ));

  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit
        imgTopic={alternativeTreatmentImg}
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
        <p>{fr.p1}</p>
        {displaySurgeryTypes(fr.types)}
      </div>
    </div>
  );
}
