import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { BulletWithSubBullets } from '../../models/bulletWithSubBullets';
import Bullets from '../bullets/bullets';
import './generalized-crysis-type-modal.scss';

interface GeneralizedCrysisTypeModalProps {
  title: string;
  bullets: (string | BulletWithSubBullets)[];
  type: string;
}

export default function GeneralizedCrysisTypeModal({
  title,
  bullets,
  type
}: GeneralizedCrysisTypeModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>
        <PlusOutlined /> {type}
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="generalized-crysis-type-modal"
        centered>
        <div>
          <Bullets bullets={bullets} />
        </div>
      </Modal>
    </>
  );
}
