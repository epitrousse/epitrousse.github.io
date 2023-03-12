import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Routes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';

export default function About() {
  return (
    <div className="max-viewport-width margin-page-view">
      <Typography.Title level={1}>{fr.title}</Typography.Title>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={Routes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{commonFr.about}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">Hi</div>
    </div>
  );
}
