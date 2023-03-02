import { Breadcrumb, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import topic5 from '../../assets/img/topic-5.jpg';
import Bullets from '../../components/bullets/bullets';
import FlippableCard from '../../components/flippable-card/flippable-card';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { Routes } from '../../models/enums/routes.enum';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';
import './myths-and-facts.scss';

export default function MythsAndFacts() {
  const displayCards = (question, answer, lg = 8) => (
    <Col className="myths-and-fact-card-col" xs={24} md={12} lg={lg}>
      <FlippableCard
        frontContent={question}
        backContent={answer}></FlippableCard>
    </Col>
  );

  const fact8Answer = (
    <>
      <p>{fr.facts.fact8.answer.text}</p>
      <Bullets bullets={fr.facts.fact8.answer.bullets} />
    </>
  );

  return (
    <div className="max-viewport-width margin-page-view">
      <TitleSectionKit imgTopic={topic5} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={Routes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={Routes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <Row gutter={[16, 16]} className="cards">
          {displayCards(fr.facts.fact1.question, fr.facts.fact1.answer)}
          {displayCards(fr.facts.fact2.question, fr.facts.fact2.answer)}
          {displayCards(fr.facts.fact3.question, fr.facts.fact3.answer)}
          {displayCards(fr.facts.fact4.question, fr.facts.fact4.answer)}
          {displayCards(fr.facts.fact5.question, fr.facts.fact5.answer)}
          {displayCards(fr.facts.fact6.question, fr.facts.fact6.answer)}
          {displayCards(fr.facts.fact7.question, fr.facts.fact7.answer)}
          {displayCards(fr.facts.fact8.question, fact8Answer, 16)}
        </Row>
      </div>
    </div>
  );
}
