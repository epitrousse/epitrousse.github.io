import { Breadcrumb, Tabs, TabsProps, Typography } from 'antd';
import topic4 from '../../assets/img/topic-4.jpg';
import AdultsImpacts from '../../components/adults-impacts/adults-impacts';
import ChildrenImpacts from '../../components/children-impacts/children-impacts';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
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
    <div className="max-viewport-width margin-page">
      <TitleSectionKit imgTopic={topic4} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Accueil</Breadcrumb.Item>
        <Breadcrumb.Item>Trousse</Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="white-background content-container">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
}
