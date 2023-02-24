import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import topic3 from '../../assets/img/topic-3.jpg';
import Bullets from '../../components/bullets/bullets';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { Routes } from '../../models/enums/routes.enum';
import { fr } from './i18n/fr';

interface OrderedBullets {
  title: string;
  p1: string;
}

export default function Treatments() {
  const displayOrderedBullets = (bullets: OrderedBullets[]) => {
    return (
      <ol>
        {bullets.map((bullet) => (
          <li key={bullet.title}>
            {bullet.title} <p>{bullet.p1}</p>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={topic3} title={fr.title}></TitleSectionKit>
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
        <Typography.Title level={3}>{fr.s1.title}</Typography.Title>
        <Typography.Title level={4}>{fr.s1.ss1.title}</Typography.Title>
        <p>{fr.s1.ss1.p1}</p>
        <Typography.Title level={4}>{fr.s1.ss2.title}</Typography.Title>
        <p>{fr.s1.ss2.p1}</p>
        <Typography.Title level={4}>{fr.s1.ss3.title}</Typography.Title>
        <Bullets bullets={fr.s1.ss3.bullets} />
        <Typography.Title level={4}>{fr.s1.ss4.title}</Typography.Title>
        <Bullets bullets={fr.s1.ss4.bullets} />
        <Typography.Title level={4}>{fr.s1.ss5.title}</Typography.Title>
        <p>{fr.s1.ss5.p1}</p>
        <p>{fr.s1.ss5.p2}</p>

        <Typography.Title level={3}>{fr.s2.title}</Typography.Title>
        <p>{fr.s2.p1}</p>

        <Typography.Title level={3}>{fr.s3.title}</Typography.Title>
        <Typography.Title level={4}>{fr.s3.ss1.title}</Typography.Title>
        <p>{fr.s3.ss1.p1}</p>
        <p>{fr.s3.ss1.p1}</p>
        <Typography.Title level={4}>{fr.s3.ss2.title}</Typography.Title>
        <p>{fr.s3.ss2.p1}</p>
        <Typography.Title level={4}>{fr.s3.ss3.title}</Typography.Title>
        {displayOrderedBullets(fr.s3.ss3.bullets)}
        <Typography.Title level={4}>{fr.s3.ss4.title}</Typography.Title>
        <p>{fr.s3.ss4.p1}</p>
        <p>{fr.s3.ss4.p2}</p>
        <p>{fr.s3.ss4.p3}</p>

        <Typography.Title level={3}>{fr.s4.title}</Typography.Title>
        <p>{fr.s4.p1}</p>
        {displayOrderedBullets(fr.s4.bullets)}
      </div>
    </div>
  );
}
