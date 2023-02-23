import { Breadcrumb, Collapse, Typography } from 'antd';
import { Link } from 'react-router-dom';
import topic1 from '../../assets/img/topic-1.jpg';
import Bullets from '../../components/bullets/bullets';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { Routes } from '../../models/enums/routes.enum';
import { fr } from './i18n/fr';

export default function AboutEpilepsy() {
  return (
    <div className="max-viewport-width margin-page">
      <TitleSectionKit imgTopic={topic1} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={Routes.Home}>Accueil</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routes.Kit}>Trousse</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <Collapse accordion ghost>
          <Collapse.Panel header={fr.category1.title} key="1">
            <p>{fr.category1.p1}</p>
          </Collapse.Panel>

          <Collapse.Panel header={fr.category2.title} key="2">
            <p>{fr.category2.p1}</p>
          </Collapse.Panel>

          <Collapse.Panel header={fr.category3.title} key="3">
            <p>{fr.category3.p1}</p>
            <Bullets bullets={fr.category3.bullets} />
            <Typography.Title level={4}>
              {fr.category3.causes.title}
            </Typography.Title>
            <p>{fr.category3.causes.p1}</p>
            <p>{fr.category3.causes.p2}</p>
            <Typography.Title level={4}>
              {fr.category3.triggers.title}
            </Typography.Title>
            <p>{fr.category3.triggers.p1}</p>
            <p>{fr.category3.triggers.p2}</p>
            <Bullets bullets={fr.category3.triggers.bullets} />
          </Collapse.Panel>

          <Collapse.Panel header={fr.category4.title} key="4">
            <p>{fr.category4.p1}</p>
            <Typography.Title level={4}>
              {fr.category4.ss1.title}
            </Typography.Title>
            <Bullets bullets={fr.category4.ss1.bullets} />
            <Typography.Title level={4}>
              {fr.category4.ss2.title}
            </Typography.Title>
            <p>{fr.category4.ss2.p1}</p>
            <Typography.Title level={5}>
              {fr.category4.ss2.sss1.title}
            </Typography.Title>
            <Bullets bullets={fr.category4.ss2.sss1.bullets} />
            <Typography.Title level={5}>
              {fr.category4.ss2.sss2.title}
            </Typography.Title>
            <Bullets bullets={fr.category4.ss2.sss2.bullets} />
            <Typography.Title level={5}>
              {fr.category4.ss2.sss3.title}
            </Typography.Title>
            <Bullets bullets={fr.category4.ss2.sss3.bullets} />
            <Typography.Title level={5}>
              {fr.category4.ss2.sss4.title}
            </Typography.Title>
            <Bullets bullets={fr.category4.ss2.sss4.bullets} />
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  );
}
