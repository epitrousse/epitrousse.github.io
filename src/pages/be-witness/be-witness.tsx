import { Breadcrumb, Typography } from 'antd';
import topic2 from '../../assets/img/topic-2.jpg';
import Bullets from '../../components/bullets/bullets';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { fr } from './i18n/fr';

export default function BeWitness() {
  return (
    <div className="max-viewport-width margin-page">
      <TitleSectionKit
        imgTopic={topic2}
        title={"Que faire si je suis témoin d'une crise?"}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Accueil</Breadcrumb.Item>
        <Breadcrumb.Item>Trousse</Breadcrumb.Item>
        <Breadcrumb.Item>
          {"Que faire si je suis témoin d'une crise?"}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <p>{fr.p1}</p>
        <p>{fr.p2}</p>
        <p>{fr.p3}</p>
        <Typography.Title level={3}>{fr.ss1.title}</Typography.Title>
        <Bullets bullets={fr.ss1.bullets} />
        <Typography.Title level={3}>{fr.ss2.title}</Typography.Title>
        <Typography.Title level={4}>{fr.ss2.sss1.title}</Typography.Title>
        <Bullets bullets={fr.ss2.sss1.bullets} />
        <Typography.Title level={4}>{fr.ss2.sss2.title}</Typography.Title>
        <Bullets bullets={fr.ss2.sss2.bullets} />
        <Typography.Title level={4}>{fr.ss2.sss3.title}</Typography.Title>
        <Bullets bullets={fr.ss2.sss3.bullets} />
        <Typography.Title level={4}>{fr.ss2.sss4.title}</Typography.Title>
        <Bullets bullets={fr.ss2.sss4.bullets} />
        <Typography.Title level={3}>{fr.ss3.title}</Typography.Title>
        <Bullets bullets={fr.ss3.bullets} />
      </div>
    </div>
  );
}
