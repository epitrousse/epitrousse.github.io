import { Breadcrumb, Collapse, Typography } from 'antd';
import { Link } from 'react-router-dom';
import drugsTreatmentImg from '../../../../assets/img/treatments/drugs.png';
import crysisDiaryPdf from '../../../../assets/pdf/crysis-diary.pdf';
import sideEffectsPdf from '../../../../assets/pdf/side-effects.pdf';
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

        <Collapse accordion={true} ghost>
          <Collapse.Panel
            header={
              <Typography.Title level={2}>{fr.s2.title}</Typography.Title>
            }
            key="1">
            <p>{fr.s2.p1}</p>
            <Bullets bullets={fr.s2.bullets} />
            <p>
              <span>{fr.s2.p2.before}</span>
              <a
                href={sideEffectsPdf}
                target="_blank"
                rel="noopener noreferrer">
                {fr.s2.p2.link}
              </a>
              <span>{fr.s2.p2.after}</span>
            </p>
          </Collapse.Panel>

          <Collapse.Panel
            header={
              <Typography.Title level={2}>{fr.s3.title}</Typography.Title>
            }
            key="2">
            <Bullets bullets={fr.s3.bullets} />
            <p>
              {fr.s3.p1.textBefore}
              <a
                href={crysisDiaryPdf}
                rel="noopener noreferrer"
                target="_blank">
                {fr.s3.p1.link}
              </a>
              {fr.s3.p1.textAfter}
            </p>
          </Collapse.Panel>

          <Collapse.Panel
            header={
              <Typography.Title level={2}>{fr.s4.title}</Typography.Title>
            }
            key="3">
            <p>{fr.s4.p1}</p>
            <p>{fr.s4.p2}</p>
          </Collapse.Panel>

          <Collapse.Panel
            header={
              <Typography.Title level={2}>{fr.s5.title}</Typography.Title>
            }
            key="4">
            <p>{fr.s5.p1}</p>
            <p>{fr.s5.p2}</p>
          </Collapse.Panel>

          <Collapse.Panel
            header={
              <Typography.Title level={2}>{fr.s6.title}</Typography.Title>
            }
            key="5">
            <p>
              <span>{fr.s6.p1Before}</span>
              <a href={fr.s6.link.href} rel="noreferrer" target="_blank">
                {fr.s6.link.text}
              </a>
              <span>{fr.s6.p1After}</span>
            </p>
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  );
}
