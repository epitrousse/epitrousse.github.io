import { PlusOutlined } from '@ant-design/icons';
import { Card, Modal } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useState } from 'react';
import { BulletWithSubBullets } from '../../models/bulletWithSubBullets';
import Bullets from '../bullets/bullets';
import './generalized-crysis-type-modal.scss';

interface GeneralizedCrysisTypeModalProps {
  title: string;
  bullets: (string | BulletWithSubBullets)[];
  type: string;
  img: string;
}

export default function GeneralizedCrysisTypeModal({
  title,
  bullets,
  type,
  img
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
      <Card
        className="generalized-crysis-card"
        onClick={showModal}
        hoverable
        style={{ width: 250 }}
        cover={<img src={img} />}>
        <Meta
          title={
            <>
              {type} <PlusOutlined />
            </>
          }
        />
      </Card>
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
