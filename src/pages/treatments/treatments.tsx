import { Breadcrumb, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import topic3 from '../../assets/img/kit/topic-3.jpg';
import alternativeImg from '../../assets/img/treatments/alternative-treatments.jpg';
import drugsImg from '../../assets/img/treatments/drugs.png';
import surgeryImg from '../../assets/img/treatments/surgery-treatments.jpg';
import CardWrapper from '../../components/card-wrapper/card-wrapper';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';

export default function Treatments() {
  const displayCard = (img, title, route) => (
    <Col xs={12} md={6} className="flex-center">
      <CardWrapper
        img={img}
        routeToNavigate={route}
        title={title}></CardWrapper>
    </Col>
  );

  return (
    <div className="max-viewport-width margin-page-view treatments">
      <TitleSectionKit imgTopic={topic3} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={AppRoutes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{commonFr.treatments}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <Row gutter={[16, 16]}>
          {displayCard(drugsImg, fr.drugs, AppRoutes.DrugsTreatments)}
          {displayCard(surgeryImg, fr.surgery, AppRoutes.SurgeryTreatments)}
          {displayCard(
            alternativeImg,
            fr.alternative,
            AppRoutes.AlternativeTreatments
          )}
        </Row>
      </div>
    </div>
  );
}
