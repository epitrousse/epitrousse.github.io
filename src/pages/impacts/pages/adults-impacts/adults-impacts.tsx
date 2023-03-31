import { Breadcrumb, Card, Col, Row, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Link, useNavigate } from 'react-router-dom';
import adultImg from '../../../../assets/img/impacts/adult.png';
import alcoolImg from '../../../../assets/img/impacts/adults/alcool.png';
import drivingImg from '../../../../assets/img/impacts/adults/driving.png';
import lifeInsuranceImg from '../../../../assets/img/impacts/adults/life-insurance.png';
import memoryImg from '../../../../assets/img/impacts/adults/memory.png';
import parenthoodImg from '../../../../assets/img/impacts/adults/parenthood.png';
import sexualityImg from '../../../../assets/img/impacts/adults/sexuality.png';
import sleepImg from '../../../../assets/img/impacts/adults/sleep.png';
import sportImg from '../../../../assets/img/impacts/adults/sport.png';
import workImg from '../../../../assets/img/impacts/adults/work.png';
import entertainingImg from '../../../../assets/img/impacts/common/entertaining.png';
import psychosocialImg from '../../../../assets/img/impacts/common/psychosocial.png';
import { fr as commonFr } from '../../../../common/i18n/fr';
import TitleSectionKit from '../../../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../../../models/enums/routes.enum';
import './adults-impacts.scss';
import { fr } from './i18n/fr';

export default function AdultsImpacts() {
  const navigate = useNavigate();

  const displayCard = (img, title, route) => (
    <Col xs={12} md={6} className="flex-center">
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
    <div className="max-viewport-width margin-page-view adults-impacts">
      <TitleSectionKit imgTopic={adultImg} title={fr.title}></TitleSectionKit>
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
        <Breadcrumb.Item>{commonFr.adult}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <Typography.Title level={2}>
          {'Cliquer sur la catégorie qui vous intéresse'}
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {displayCard(
            psychosocialImg,
            fr.psychosocial,
            AppRoutes.PsychosocialAdultImpacts
          )}
          {displayCard(workImg, fr.work, AppRoutes.WorkImpacts)}
          {displayCard(drivingImg, fr.driving, AppRoutes.DrivingImpacts)}
          {displayCard(sexualityImg, fr.sexuality, AppRoutes.SexualityImpacts)}
          {displayCard(sleepImg, fr.sleep, AppRoutes.SleepImpacts)}
          {displayCard(memoryImg, fr.memory, AppRoutes.MemoryImpacts)}
          {displayCard(sportImg, fr.sport, AppRoutes.SportImpacts)}
          {displayCard(
            entertainingImg,
            fr.entertaining,
            AppRoutes.EntertainingAdultImpacts
          )}
          {displayCard(alcoolImg, fr.alcool, AppRoutes.AlcoolImpacts)}
          {displayCard(
            lifeInsuranceImg,
            fr.lifeInsurance,
            AppRoutes.LifeInsuranceImpacts
          )}
          {displayCard(
            parenthoodImg,
            fr.parenthood,
            AppRoutes.ParenthoodImpacts
          )}
        </Row>
      </div>
    </div>
  );
}
