import { Layout } from 'antd';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Header from './components/header/header';
import { AppRoutes } from './models/enums/routes.enum';
import AboutEpilepsy from './pages/about-epilepsy/about-epilepsy';
import About from './pages/about/about';
import BeWitness from './pages/be-witness/be-witness';
import Home from './pages/home/home';
import Impacts from './pages/impacts/impacts';
import Alcool from './pages/impacts/pages/adult/alcool/alcool';
import Driving from './pages/impacts/pages/adult/driving/driving';
import AdultEntertaining from './pages/impacts/pages/adult/entertaining/entertaining';
import LifeInsurance from './pages/impacts/pages/adult/life-insurance/life-insurance';
import Memory from './pages/impacts/pages/adult/memory/memory';
import Parenthood from './pages/impacts/pages/adult/parenthood/parenthood';
import AdultPsychosocial from './pages/impacts/pages/adult/psychosocial/psychosocial';
import Sexuality from './pages/impacts/pages/adult/sexuality/sexuality';
import Sleep from './pages/impacts/pages/adult/sleep/sleep';
import Sport from './pages/impacts/pages/adult/sport/sport';
import Work from './pages/impacts/pages/adult/work/work';
import AdultsImpacts from './pages/impacts/pages/adults-impacts/adults-impacts';
import ChildrenImpacts from './pages/impacts/pages/children-impacts/children-impacts';
import ChildrenEntertaining from './pages/impacts/pages/children/entertaining/entertaining';
import ChildrenPsychosocial from './pages/impacts/pages/children/psychosocial/psychosocial';
import School from './pages/impacts/pages/children/school/school';
import Kit from './pages/kit/kit';
import MythsAndFacts from './pages/myths-and-facts/myths-and-facts';
import Resources from './pages/resources/resources';
import Tools from './pages/tools/tools';
import AlternativeTreatment from './pages/treatments/pages/alternative-treatment/alternative-treatment';
import DrugsTreatment from './pages/treatments/pages/drugs-treatment/drugs-treatment';
import SurgeryTreatment from './pages/treatments/pages/surgery-treatment/surgery-treatment';
import Treatments from './pages/treatments/treatments';

const getElement = (content) => (
  <>
    <Header />
    <Layout.Content style={{ flex: 1 }}>{content}</Layout.Content>
  </>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={AppRoutes.Home} replace />
  },
  {
    path: AppRoutes.Home,
    element: getElement(<Home />)
  },
  {
    path: AppRoutes.About,
    element: getElement(<About />)
  },
  {
    path: AppRoutes.Resources,
    element: getElement(<Resources />)
  },
  {
    path: AppRoutes.Kit,
    element: getElement(<Kit />)
  },
  {
    path: AppRoutes.AboutEpilepsy,
    element: getElement(<AboutEpilepsy />)
  },
  {
    path: AppRoutes.BeWitness,
    element: getElement(<BeWitness />)
  },
  {
    path: AppRoutes.Impacts,
    element: getElement(<Impacts />)
  },
  {
    path: AppRoutes.AdultsImpacts,
    element: getElement(<AdultsImpacts />)
  },
  {
    path: AppRoutes.WorkImpacts,
    element: getElement(<Work />)
  },
  {
    path: AppRoutes.PsychosocialAdultImpacts,
    element: getElement(<AdultPsychosocial />)
  },
  {
    path: AppRoutes.EntertainingAdultImpacts,
    element: getElement(<AdultEntertaining />)
  },
  {
    path: AppRoutes.AlcoolImpacts,
    element: getElement(<Alcool />)
  },
  {
    path: AppRoutes.DrivingImpacts,
    element: getElement(<Driving />)
  },
  {
    path: AppRoutes.LifeInsuranceImpacts,
    element: getElement(<LifeInsurance />)
  },
  {
    path: AppRoutes.SleepImpacts,
    element: getElement(<Sleep />)
  },
  {
    path: AppRoutes.SportImpacts,
    element: getElement(<Sport />)
  },
  {
    path: AppRoutes.MemoryImpacts,
    element: getElement(<Memory />)
  },
  {
    path: AppRoutes.ParenthoodImpacts,
    element: getElement(<Parenthood />)
  },
  {
    path: AppRoutes.SexualityImpacts,
    element: getElement(<Sexuality />)
  },
  {
    path: AppRoutes.ChildrenImpacts,
    element: getElement(<ChildrenImpacts />)
  },
  {
    path: AppRoutes.SchoolImpacts,
    element: getElement(<School />)
  },
  {
    path: AppRoutes.PsychosocialChildrenImpacts,
    element: getElement(<ChildrenPsychosocial />)
  },
  {
    path: AppRoutes.EntertainingChildrenImpacts,
    element: getElement(<ChildrenEntertaining />)
  },
  {
    path: AppRoutes.MythsAndFacts,
    element: getElement(<MythsAndFacts />)
  },
  {
    path: AppRoutes.Tools,
    element: getElement(<Tools />)
  },
  {
    path: AppRoutes.Treatments,
    element: getElement(<Treatments />)
  },
  {
    path: AppRoutes.DrugsTreatments,
    element: getElement(<DrugsTreatment />)
  },
  {
    path: AppRoutes.SurgeryTreatments,
    element: getElement(<SurgeryTreatment />)
  },
  {
    path: AppRoutes.AlternativeTreatments,
    element: getElement(<AlternativeTreatment />)
  }
]);
