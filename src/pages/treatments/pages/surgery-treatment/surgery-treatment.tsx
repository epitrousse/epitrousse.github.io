import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import surgeryTreatmentImg from '../../../../assets/img/treatments/surgery-treatments.jpg';
import { fr as commonFr } from '../../../../common/i18n/fr';
import TitleSectionKit from '../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../models/enums/routes.enum';
import { fr } from './i18n/fr';

interface SurgeryType {
  title: string;
  p1: string;
}

export default function SurgeryTreatment() {
  const displaySurgeryTypes = (surgeryTypes: SurgeryType[]) =>
    surgeryTypes.map((surgeryType) => (
      <>
        <Typography.Title level={3}>{surgeryType.title}</Typography.Title>
        <p>{surgeryType.p1}</p>
      </>
    ));

  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit
        imgTopic={surgeryTreatmentImg}
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
        {displaySurgeryTypes(fr.s2.types)}
        <Typography.Title level={2}>{fr.s3.title}</Typography.Title>
        <p>{fr.s3.p1}</p>
      </div>
    </div>
  );
}
