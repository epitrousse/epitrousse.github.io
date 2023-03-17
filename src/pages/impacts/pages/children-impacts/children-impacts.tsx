import { Breadcrumb, Card, Col, Row, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Link, useNavigate } from 'react-router-dom';
import childrenImg from '../../../../assets/img/impacts/child.png';
import schoolImg from '../../../../assets/img/impacts/children/school.png';
import entertainingImg from '../../../../assets/img/impacts/common/entertaining.png';
import psychosocialImg from '../../../../assets/img/impacts/common/psychosocial.png';
import { fr as commonFr } from '../../../../common/i18n/fr';
import TitleSectionKit from '../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../models/enums/routes.enum';
import './children-impacts.scss';
import { fr } from './i18n/fr';

export default function ChildrenImpacts() {
  const navigate = useNavigate();

  const displayCard = (img, title, route) => (
    <Col span={6} className="flex-center">
      <Card
        className="impact-card"
        hoverable
        cover={<img src={img} />}
        onClick={() => navigate(route)}>
        <Meta title={title} />
      </Card>
    </Col>
  );

  return (
    <div className="max-viewport-width margin-page-view children-impacts">
      <TitleSectionKit
        imgTopic={childrenImg}
        title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={AppRoutes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Impacts}>{commonFr.impacts}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{commonFr.children}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <Typography.Title level={2}>
          {'Cliquer sur la catégorie qui vous intéresse'}
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {displayCard(schoolImg, fr.school, AppRoutes.SchoolImpacts)}
          {displayCard(
            psychosocialImg,
            fr.psychosocial,
            AppRoutes.PsychosocialChildrenImpacts
          )}
          {displayCard(
            entertainingImg,
            fr.enternaining,
            AppRoutes.EntertainingChildrenImpacts
          )}
        </Row>
      </div>
    </div>
  );
}
