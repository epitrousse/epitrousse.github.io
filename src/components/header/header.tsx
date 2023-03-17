import { BranchesOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../hooks/use-window-dimensions.hook';
import { AppRoutes } from '../../models/enums/routes.enum';
import HeaderDesktopMenu from '../header-desktop-menu/header-desktop-menu';
import HeaderMobileMenu from '../header-mobile-menu/header-mobile-menu';
import './header.scss';
import { fr } from './i18n/fr';

export default function Header() {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(AppRoutes.Home);
  };

  const displayMenu = () =>
    width < 576 ? <HeaderMobileMenu /> : <HeaderDesktopMenu />;

  return (
    <Layout.Header className="header">
      <div className="header-content max-viewport-width">
        <Space onClick={navigateToHome} align="center" className="pointer">
          <BranchesOutlined className="header-logo" />
          <span className="header-app-name">{fr.siteName}</span>
        </Space>
        {displayMenu()}
      </div>
    </Layout.Header>
  );
}
