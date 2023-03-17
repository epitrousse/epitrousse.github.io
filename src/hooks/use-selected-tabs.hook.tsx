import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderTabsKeys } from '../models/enums/header-tabs-keys.enum';
import { AppRoutes } from '../models/enums/routes.enum';

export default function useSelectedTabs() {
  const location = useLocation();
  const [selectedKeys, setselectedKeys] = useState<Array<string>>([]);

  useEffect(() => {
    switch (location.pathname) {
      case AppRoutes.Home:
        setselectedKeys([]);
        break;
      case AppRoutes.Kit:
        setselectedKeys([HeaderTabsKeys.Kit]);
        break;
      case AppRoutes.About:
        setselectedKeys([HeaderTabsKeys.About]);
        break;
      case AppRoutes.Resources:
        setselectedKeys([HeaderTabsKeys.Resources]);
        break;

      default:
        break;
    }
  }, [location]);

  return selectedKeys;
}
