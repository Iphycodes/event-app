'use client';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type AppProviderPropType = {
  children: ReactNode;
};

interface AppContextPropType {
  toggleLeftDrawer: boolean;
  setToggleLeftDrawer: Dispatch<SetStateAction<boolean>>;
  leftDrawerKey: 'add-element' | 'layout' | 'add-invitee' | 'event-setting';
  setLeftDrawerKey: Dispatch<
    SetStateAction<'add-element' | 'layout' | 'add-invitee' | 'event-setting'>
  >;
  currentResponsiveView: 'mobile' | 'tablet' | 'desktop';
  setCurrentResponsiveView: Dispatch<SetStateAction<'mobile' | 'tablet' | 'desktop'>>;
}

export const AppContext = createContext<AppContextPropType>({
  toggleLeftDrawer: false,
  setToggleLeftDrawer: () => {},
  leftDrawerKey: 'add-element',
  setLeftDrawerKey: () => {},
  currentResponsiveView: 'desktop',
  setCurrentResponsiveView: () => {},
});

export const AppProvider = (props: AppProviderPropType) => {
  const { children } = props;
  // const isMobile = useMediaQuery(mediaSize.mobile);

  const [toggleLeftDrawer, setToggleLeftDrawer] = useState(true);
  const [leftDrawerKey, setLeftDrawerKey] = useState<
    'add-element' | 'layout' | 'add-invitee' | 'event-setting'
  >('add-element');
  const [currentResponsiveView, setCurrentResponsiveView] = useState<
    'mobile' | 'tablet' | 'desktop'
  >('desktop');

  // useEffect(() => {
  //   isMobile && setToggleSider(true);
  // }, [isMobile]);

  const values: any = {
    setToggleLeftDrawer,
    toggleLeftDrawer,
    leftDrawerKey,
    setLeftDrawerKey,
    currentResponsiveView,
    setCurrentResponsiveView,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
