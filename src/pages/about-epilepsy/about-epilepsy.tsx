import { Breadcrumb, Collapse, Image, Typography } from 'antd';
import { Link } from 'react-router-dom';
import triggerImg from '../../assets/img/about-epilepsy/triggers.png';
import topic1 from '../../assets/img/kit/topic-1.jpg';
import Bullets from '../../components/bullets/bullets';
import CrysisCategoriesSection from '../../components/crysis-categories-section/crysis-categories-section';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../models/enums/routes.enum';
import imgBrain from './../../assets/img/about-epilepsy/brain.png';
import imgWhatHappened from './../../assets/img/about-epilepsy/what-happened.jpg';
import { fr as commonFr } from './../../common/i18n/fr';
import './about-epilepsy.scss';
import { fr } from './i18n/fr';

export default function AboutEpilepsy() {
  return (
    <div className="max-viewport-width margin-page-view about-epilepsy">
      <TitleSectionKit imgTopic={topic1} title={fr.title}></TitleSectionKit>
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
        <Collapse accordion={true} ghost>
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
            <Image src={imgWhatHappened}></Image>
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
              <p>{fr.category3.causes.p1}</p>
              <p>{fr.category3.causes.p2}</p>
            </div>
            <div>
              <Typography.Title level={3}>
                {fr.category3.triggers.title}
              </Typography.Title>
              <div>
                <div>
                  <img className="trigger-img" src={triggerImg} />
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
            <Bullets bullets={fr.category4.bullets} />
            <p>{fr.category4.p2}</p>
          </Collapse.Panel>

          <Collapse.Panel
            header={
              <Typography.Title level={2}>
                {fr.category5.title}
              </Typography.Title>
            }
            key="5">
            <p>{fr.category5.p1}</p>
            <CrysisCategoriesSection
              focalTitle={fr.category5.ss1.title}
              focalBullets={fr.category5.ss1.bullets}
              myoclonicBullets={fr.category5.ss2.sss4.bullets}
              tonicoClonicBullets={fr.category5.ss2.sss2.bullets}
              absenceBullets={fr.category5.ss2.sss1.bullets}
              atonicBullets={fr.category5.ss2.sss3.bullets}
              generalizedCrysisTitle={fr.category5.ss2.title}
              generalizedCrysisText={fr.category5.ss2.p1}
            />
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  );
}
