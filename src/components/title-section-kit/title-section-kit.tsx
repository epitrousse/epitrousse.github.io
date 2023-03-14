import { Col, Image, Row, Typography } from 'antd';
import './title-section-kit.scss';

interface TitleSectionKitProps {
  imgTopic: string;
  title: string;
}

export default function TitleSectionKit({
  imgTopic,
  title
}: TitleSectionKitProps) {
  return (
    <Row className="white-background section-kit-container">
      <Col xs={24} md={12} className="flex-center">
        <Typography.Title className="section-kit-title">
          {title}
        </Typography.Title>
      </Col>
      <Col xs={24} md={12} className="flex-center">
        <Image className="section-img" preview={false} src={imgTopic}></Image>
      </Col>
    </Row>
  );
}
