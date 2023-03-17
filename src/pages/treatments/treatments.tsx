import { Breadcrumb, Collapse, Typography } from 'antd';
import { Link } from 'react-router-dom';
import topic3 from '../../assets/img/topic-3.jpg';
import Bullets from '../../components/bullets/bullets';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';

interface SurgeryType {
  title: string;
  p1: string;
}

export default function Treatments() {
  const displaySurgeryTypes = (surgeryTypes: SurgeryType[]) =>
    surgeryTypes.map((surgeryType) => (
      <>
        <Typography.Title level={4}>{surgeryType.title}</Typography.Title>
        <p>{surgeryType.p1}</p>
      </>
    ));

  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={topic3} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={AppRoutes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <Collapse accordion ghost>
          <Collapse.Panel
            header={
              <Typography.Title level={2}>{fr.s1.title}</Typography.Title>
            }
            key="1">
            <p>{fr.s1.ss1.p1}</p>
            <Typography.Title level={3}>{fr.s1.ss2.title}</Typography.Title>
            <p>{fr.s1.ss2.p1}</p>
            <Bullets bullets={fr.s1.ss3.bullets} />
            <Typography.Title level={3}>{fr.s1.ss4.title}</Typography.Title>
            <Bullets bullets={fr.s1.ss4.bullets} />
            <Typography.Title level={3}>{fr.s1.ss5.title}</Typography.Title>
            <p>{fr.s1.ss5.p1}</p>
            <p>{fr.s1.ss5.p2}</p>
            <Typography.Title level={3}>{fr.s1.ss6.title}</Typography.Title>
            <p>{fr.s1.ss6.p1}</p>
            <p>{fr.s1.ss6.p2}</p>
            <Typography.Title level={3}>{fr.s1.ss7.title}</Typography.Title>
            <p>{fr.s1.ss7.p1}</p>
          </Collapse.Panel>

          <Collapse.Panel
            header={
              <Typography.Title level={2}>{fr.s2.title}</Typography.Title>
            }
            key="2">
            <p>{fr.s2.ss2.p1}</p>
            <Typography.Title level={3}>{fr.s2.ss3.title}</Typography.Title>
            {displaySurgeryTypes(fr.s2.ss3.types)}
            <Typography.Title level={3}>{fr.s2.ss4.title}</Typography.Title>
            <p>{fr.s2.ss4.p1}</p>
          </Collapse.Panel>

          <Collapse.Panel
            header={
              <Typography.Title level={2}>{fr.s3.title}</Typography.Title>
            }
            key="3">
            <p>{fr.s3.p1}</p>
            {displaySurgeryTypes(fr.s3.types)}
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  );
}
