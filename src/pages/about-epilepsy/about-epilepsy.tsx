import { Breadcrumb, Col, Collapse, Image, Row, Typography } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgAbsence from '../../assets/img/about-epilepsy/absence.png';
import imgAtonic from '../../assets/img/about-epilepsy/atonic-crysis.png';
import imgMyoclonic from '../../assets/img/about-epilepsy/myoclonic-crysis.png';
import imgTonicoClonic from '../../assets/img/about-epilepsy/tonico-clonic-crysis.png';
import topic1 from '../../assets/img/topic-1.jpg';
import Bullets from '../../components/bullets/bullets';
import GeneralizedCrysisTypeModal from '../../components/generalized-crysis-type-modal/generalized-crysis-type-modal';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { Routes } from '../../models/enums/routes.enum';
import imgBrain from './../../assets/img/about-epilepsy/brain.png';
import imgCauses from './../../assets/img/about-epilepsy/causes.jpg';
import imgFocalCrysis2 from './../../assets/img/about-epilepsy/focal-crysis-2.jpg';
import { fr as commonFr } from './../../common/i18n/fr';
import './about-epilepsy.scss';
import { fr } from './i18n/fr';

enum CrysisType {
  Generalized = 'Generalized',
  Focal = 'Focal'
}

export default function AboutEpilepsy() {
  const [crysisToDisplay, setCrysisToDisplay] = useState(null);

  const displayFocalCrysis = () => (
    <>
      <Typography.Title level={3}>{fr.category4.ss1.title}</Typography.Title>
      <div>
        <img className="floatRight focalCrysisImg" src={imgFocalCrysis2} />
        <Bullets bullets={fr.category4.ss1.bullets} />
      </div>
    </>
  );

  const displayGeneralizedCrysis = () => (
    <>
      <Typography.Title level={3}>{fr.category4.ss2.title}</Typography.Title>
      <p>{fr.category4.ss2.p1}</p>
      <Row style={{ width: 'fit-content' }} gutter={[16, 16]}>
        <Col className="flex-center" xs={24} sm={12} lg={6}>
          <GeneralizedCrysisTypeModal
            title={fr.category4.ss2.sss1.title}
            bullets={fr.category4.ss2.sss1.bullets}
            type={fr.category4.ss2.sss1.type}
            img={imgAbsence}
          />
        </Col>
        <Col className="flex-center" xs={24} sm={12} lg={6}>
          <GeneralizedCrysisTypeModal
            title={fr.category4.ss2.sss2.title}
            bullets={fr.category4.ss2.sss2.bullets}
            type={fr.category4.ss2.sss2.type}
            img={imgTonicoClonic}
          />
        </Col>
        <Col className="flex-center" xs={24} sm={12} lg={6}>
          <GeneralizedCrysisTypeModal
            title={fr.category4.ss2.sss3.title}
            bullets={fr.category4.ss2.sss3.bullets}
            type={fr.category4.ss2.sss3.type}
            img={imgAtonic}
          />
        </Col>
        <Col className="flex-center" xs={24} sm={12} lg={6}>
          <GeneralizedCrysisTypeModal
            title={fr.category4.ss2.sss4.title}
            bullets={fr.category4.ss2.sss4.bullets}
            type={fr.category4.ss2.sss4.type}
            img={imgMyoclonic}
          />
        </Col>
      </Row>
    </>
  );

  const displayCrysisCategory = (imgClass, crysis) => (
    <div
      className={`box ${imgClass} ${crysis === crysisToDisplay && 'selected'}`}
      onClick={() => setCrysisToDisplay(crysis)}></div>
  );

  return (
    <div className="max-viewport-width margin-page-view about-epilepsy">
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
            <Image src={imgBrain}></Image>
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
            <div>
              <img className="causesImg floatRight" src={imgCauses} />
              <div>
                <p>{fr.category3.causes.p1}</p>
                <p>{fr.category3.causes.p2}</p>
              </div>
            </div>
            <div>
              <Typography.Title level={3}>
                {fr.category3.triggers.title}
              </Typography.Title>
              <div>
                <div>
                  <p>{fr.category3.triggers.p1}</p>
                  <p>{fr.category3.triggers.p2}</p>
                </div>
              </div>
              <Bullets bullets={fr.category3.triggers.bullets} />
            </div>
          </Collapse.Panel>

          <Collapse.Panel
            header={
              <Typography.Title level={2}>
                {fr.category4.title}
              </Typography.Title>
            }
            key="4">
            <p>{fr.category4.p1}</p>
            <div className="crysisCategories">
              {displayCrysisCategory('focalCrysisBackground', CrysisType.Focal)}
              {displayCrysisCategory(
                'generalizedCrysisBackground',
                CrysisType.Generalized
              )}
            </div>
            <>{CrysisType.Focal === crysisToDisplay && displayFocalCrysis()}</>
            <>
              {CrysisType.Generalized === crysisToDisplay &&
                displayGeneralizedCrysis()}
            </>
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  );
}
