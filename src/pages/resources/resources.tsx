import { Breadcrumb, Tabs, TabsProps, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';

export default function Resources() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <Typography.Text>{fr.contentTab.title}</Typography.Text>,
      children: (
        <ul>
          {fr.contentTab.bibliography.map((b) => (
            <li key={b} dangerouslySetInnerHTML={{ __html: b }}></li>
          ))}
        </ul>
      )
    },
    {
      key: '2',
      label: <Typography.Text>{fr.imagesTab.title}</Typography.Text>,
      children: <div>Images</div>
    }
  ];

  return (
    <div className="max-viewport-width margin-page-view">
      <Typography.Title level={1}>{fr.title}</Typography.Title>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={AppRoutes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{commonFr.resources}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
}
