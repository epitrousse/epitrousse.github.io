import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import topic6 from '../../assets/img/topic-6.jpg';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { Routes } from '../../models/enums/routes.enum';
import { fr } from './i18n/fr';

export default function Tools() {
  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={topic6} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={Routes.Home}>Accueil</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routes.Kit}>Trousse</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container"></div>
    </div>
  );
}
