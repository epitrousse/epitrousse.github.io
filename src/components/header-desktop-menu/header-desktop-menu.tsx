import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import useSelectedTabs from '../../hooks/use-selected-tabs.hook';
import { HeaderTabsKeys } from '../../models/enums/header-tabs-keys.enum';
import { Routes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';

export default function HeaderDesktopMenu() {
  const selectedTabs = useSelectedTabs();

  const items = [
    {
      label: <Link to={Routes.Kit}>{commonFr.kit}</Link>,
      key: HeaderTabsKeys.Kit
    },
    {
      label: <Link to={Routes.About}>{commonFr.about}</Link>,
      key: HeaderTabsKeys.About
    },
    {
      label: <Link to={Routes.Resources}>{commonFr.resources}</Link>,
      key: HeaderTabsKeys.Resources
    }
  ];

  return (
    <Menu
      style={{ fontSize: '14px' }}
      mode="horizontal"
      items={items}
      selectedKeys={selectedTabs}
    />
  );
}
