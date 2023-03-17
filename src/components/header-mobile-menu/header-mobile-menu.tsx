import { MenuOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Typography } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import './header-mobile-menu.scss';
import { fr } from './i18n/fr';

export default function HeaderMobileMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = (path) => {
    setIsModalOpen(false);
    navigate(path);
  };

  const displayNavigationButton = (text, path) => (
    <Button onClick={() => handleNavigate(path)} block>
      {text}
    </Button>
  );

  return (
    <>
      <Button
        className="mobile-menu-button"
        onClick={showModal}
        icon={<MenuOutlined />}></Button>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null} centered>
        <div className="mobile-menu-modal">
          <Typography.Paragraph style={{ fontWeight: 'bold' }}>
            {fr.whatToConsult}
          </Typography.Paragraph>
          <Space style={{ width: '80%' }} size="middle" direction="vertical">
            {displayNavigationButton(commonFr.kit, AppRoutes.Kit)}
            {displayNavigationButton(commonFr.about, AppRoutes.About)}
            {displayNavigationButton(commonFr.resources, AppRoutes.Resources)}
          </Space>
        </div>
      </Modal>
    </>
  );
}
