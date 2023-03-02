import { Breadcrumb, Col, Collapse, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import topic1 from '../../assets/img/topic-1.jpg';
import Bullets from '../../components/bullets/bullets';
import GeneralizedCrysisTypeModal from '../../components/generalized-crysis-type-modal/generalized-crysis-type-modal';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { Routes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';

export default function AboutEpilepsy() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={topic1} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={Routes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <Collapse accordion ghost>
          <Collapse.Panel
            header={
              <Typography.Title level={2}>
                {fr.category1.title}
              </Typography.Title>
            }
            key="1">
            <p>{fr.category1.p1}</p>
          </Collapse.Panel>

          <Collapse.Panel
            header={
              <Typography.Title level={2}>
                {fr.category2.title}
              </Typography.Title>
            }
            key="2">
            <p>{fr.category2.p1}</p>
          </Collapse.Panel>

          <Collapse.Panel
            header={
              <Typography.Title level={2}>
                {fr.category3.title}
              </Typography.Title>
            }
            key="3">
            <p>{fr.category3.p1}</p>
            <Bullets bullets={fr.category3.bullets} />
            <Typography.Title level={3}>
              {fr.category3.causes.title}
            </Typography.Title>
            <p>{fr.category3.causes.p1}</p>
            <p>{fr.category3.causes.p2}</p>
            <Typography.Title level={3}>
              {fr.category3.triggers.title}
            </Typography.Title>
            <p>{fr.category3.triggers.p1}</p>
            <p>{fr.category3.triggers.p2}</p>
            <Bullets bullets={fr.category3.triggers.bullets} />
          </Collapse.Panel>

          <Collapse.Panel
            header={
              <Typography.Title level={2}>
                {fr.category4.title}
              </Typography.Title>
            }
            key="4">
            <p>{fr.category4.p1}</p>
            <Typography.Title level={3}>
              {fr.category4.ss1.title}
            </Typography.Title>
            <Bullets bullets={fr.category4.ss1.bullets} />
            <Typography.Title level={3}>
              {fr.category4.ss2.title}
            </Typography.Title>
            <p>{fr.category4.ss2.p1}</p>

            <Row style={{ width: 'fit-content' }} gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <GeneralizedCrysisTypeModal
                  title={fr.category4.ss2.sss1.title}
                  bullets={fr.category4.ss2.sss1.bullets}
                  type={fr.category4.ss2.sss1.type}
                />
              </Col>
              <Col xs={24} sm={12}>
                <GeneralizedCrysisTypeModal
                  title={fr.category4.ss2.sss2.title}
                  bullets={fr.category4.ss2.sss2.bullets}
                  type={fr.category4.ss2.sss2.type}
                />
              </Col>
              <Col xs={24} sm={12}>
                <GeneralizedCrysisTypeModal
                  title={fr.category4.ss2.sss3.title}
                  bullets={fr.category4.ss2.sss3.bullets}
                  type={fr.category4.ss2.sss3.type}
                />
              </Col>
              <Col xs={24} sm={12}>
                <GeneralizedCrysisTypeModal
                  title={fr.category4.ss2.sss4.title}
                  bullets={fr.category4.ss2.sss4.bullets}
                  type={fr.category4.ss2.sss4.type}
                />
              </Col>
            </Row>
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  );
}
