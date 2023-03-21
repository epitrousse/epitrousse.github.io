import { CrysisType } from '../../../models/enums/crysis-type.enum';

export const fr = {
  type: {
    [CrysisType.Focal]: `Crise focale`,
    [CrysisType.Generalized]: `Crise généralisée`
  },
  generalizedCrysisCategories: {
    atonic: {
      type: `Crise atonique`,
      title: `Crise atonique`
    },
    myoclonic: {
      type: `Crise myoclonique`,
      title: `Crise myoclonique`
    },
    absence: {
      type: `Absence`,
      title: `Absence (ou crise de type PETIT MAL)`
    },
    tonicoClonic: {
      type: `Crise tonico-clonique`,
      title: `Crise tonico-clonique (ou crise de type GRAND MAL)`
    }
  }
};
