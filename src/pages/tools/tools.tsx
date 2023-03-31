import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import topic6 from '../../assets/img/kit/topic-6.jpg';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import { AppRoutes } from '../../models/enums/routes.enum';
import crysisDiaryPdf from './../../assets/pdf/crysis-diary.pdf';
import rdvPreparationPdf from './../../assets/pdf/rdv-preparation.pdf';
import { fr as commonFr } from './../../common/i18n/fr';
import { fr } from './i18n/fr';
import './tools.scss';

export default function Tools() {
  return (
    <div className="max-viewport-width margin-page-view tools">
      <TitleSectionKit imgTopic={topic6} title={fr.title}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={AppRoutes.Home}>{commonFr.home}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={AppRoutes.Kit}>{commonFr.kit}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{fr.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <p>{fr.description}</p>
        <ul>
          <li className="main-bullets">
            <a
              href={rdvPreparationPdf}
              rel="noopener noreferrer"
              target="_blank">
              {fr.tools.tool1}
            </a>
          </li>
          <li className="main-bullets">
            <a href={crysisDiaryPdf} rel="noopener noreferrer" target="_blank">
              {fr.tools.tool2}
            </a>
          </li>
          <li className="main-bullets">
            <a
              href={fr.tools.tool3.link}
              rel="noopener noreferrer"
              target="_blank">
              {fr.tools.tool3.name}
            </a>
          </li>
          <li className="main-bullets">
            <a
              href={fr.tools.tool4.link}
              rel="noopener noreferrer"
              target="_blank">
              {fr.tools.tool4.name}
            </a>
          </li>
          <li>
            <>
              <div className="main-bullets">{fr.tools.tool5.descripion}</div>
              <ul>
                <li className="second-bullets">
                  <a
                    href={fr.tools.tool5.brochures.brochure1.link}
                    rel="noopener noreferrer"
                    target="_blank">
                    {fr.tools.tool5.brochures.brochure1.name}
                  </a>
                </li>
                <li className="second-bullets">
                  <a
                    href={fr.tools.tool5.brochures.brochure2.link}
                    rel="noopener noreferrer"
                    target="_blank">
                    {fr.tools.tool5.brochures.brochure2.name}
                  </a>
                </li>
                <li className="second-bullets">
                  <a
                    href={fr.tools.tool5.brochures.brochure3.link}
                    rel="noopener noreferrer"
                    target="_blank">
                    {fr.tools.tool5.brochures.brochure3.name}
                  </a>
                </li>
                <li className="second-bullets">
                  <a
                    href={fr.tools.tool5.brochures.brochure4.link}
                    rel="noopener noreferrer"
                    target="_blank">
                    {fr.tools.tool5.brochures.brochure4.name}
                  </a>
                </li>
                <li className="second-bullets">
                  <a
                    href={fr.tools.tool5.brochures.brochure5.link}
                    rel="noopener noreferrer"
                    target="_blank">
                    {fr.tools.tool5.brochures.brochure5.name}
                  </a>
                </li>
                <li className="second-bullets">
                  <a
                    href={fr.tools.tool5.brochures.brochure6.link}
                    rel="noopener noreferrer"
                    target="_blank">
                    {fr.tools.tool5.brochures.brochure6.name}
                  </a>
                </li>
                <li className="second-bullets">
                  <a
                    href={fr.tools.tool5.brochures.brochure7.link}
                    rel="noopener noreferrer"
                    target="_blank">
                    {fr.tools.tool5.brochures.brochure7.name}
                  </a>
                </li>
                <li className="second-bullets">
                  <a
                    href={fr.tools.tool5.brochures.brochure8.link}
                    rel="noopener noreferrer"
                    target="_blank">
                    {fr.tools.tool5.brochures.brochure8.name}
                  </a>
                </li>
                <li className="second-bullets">
                  <a
                    href={fr.tools.tool5.brochures.brochure9.link}
                    rel="noopener noreferrer"
                    target="_blank">
                    {fr.tools.tool5.brochures.brochure9.name}
                  </a>
                </li>
                <li className="second-bullets">
                  <a
                    href={fr.tools.tool5.brochures.brochure10.link}
                    rel="noopener noreferrer"
                    target="_blank">
                    {fr.tools.tool5.brochures.brochure10.name}
                  </a>
                </li>
                <li className="second-bullets">
                  <a
                    href={fr.tools.tool5.brochures.brochure11.link}
                    rel="noopener noreferrer"
                    target="_blank">
                    {fr.tools.tool5.brochures.brochure11.name}
                  </a>
                </li>
              </ul>
            </>
          </li>
        </ul>
      </div>
    </div>
  );
}
