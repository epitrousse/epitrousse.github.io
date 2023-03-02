import { Breadcrumb, Tabs, TabsProps, Typography } from 'antd';
import { Link } from 'react-router-dom';
import topic4 from '../../assets/img/topic-4.jpg';
import AdultsImpacts from '../../components/adults-impacts/adults-impacts';
import ChildrenImpacts from '../../components/children-impacts/children-impacts';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { Routes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';

export default function Impacts() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <Typography.Text>{fr.tab1}</Typography.Text>,
      children: <AdultsImpacts />
    },
    {
      key: '2',
      label: <Typography.Text>{fr.tab2}</Typography.Text>,
      children: <ChildrenImpacts />
    }
  ];

  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={topic4} title={fr.title}></TitleSectionKit>
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
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
}
