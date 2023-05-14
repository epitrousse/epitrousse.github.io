import { Breadcrumb, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import adultImg from '../../assets/img/impacts/adult.png';
import childrenImg from '../../assets/img/impacts/child.png';
import topic4 from '../../assets/img/kit/topic-4.jpg';
import CardWrapper from '../../components/card-wrapper/card-wrapper';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';

export default function Impacts() {
  const displayCard = (img, title, route) => (
    <Col xs={12} md={6} className="flex-center">
      <CardWrapper
        img={img}
        routeToNavigate={route}
        title={title}></CardWrapper>
    </Col>
  );

  return (
    <div className="max-viewport-width margin-page-view impacts">
      <TitleSectionKit imgTopic={topic4} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={AppRoutes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{commonFr.impacts}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="white-background content-container impacts">
        <Typography.Title level={2}>
          {
            'Souhaitez-vous consulter les impacts pour les adultes ou les enfants?'
          }
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {displayCard(adultImg, fr.adult, AppRoutes.AdultsImpacts)}
          {displayCard(childrenImg, fr.children, AppRoutes.ChildrenImpacts)}
        </Row>
      </div>
    </div>
  );
}
