import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Layout, Menu } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { Nav } from '@grc/app/nav';
import { AppContext } from '@grc/app-context';

const { Sider } = Layout;
interface SideNavProps {
  appNav: Nav;
  selectedKey: string;
  setSelectedKey: Dispatch<SetStateAction<string>>;
}

const SideNav: React.FC<SideNavProps> = (props) => {
  const { selectedKey, appNav, setSelectedKey } = props;
  const pathname = usePathname();
  const urlPath = pathname?.split('/');
  const { push } = useRouter();
  const { setToggleLeftDrawer, setLeftDrawerKey } = useContext(AppContext);

  const getLeftDrawerKey = (
    label: 'add-element' | 'layout' | 'add-invitee' | 'event-setting' | string
  ): 'add-element' | 'layout' | 'add-invitee' | 'event-setting' => {
    switch (label) {
      case 'add-element':
        return 'add-element';
      case 'layout':
        return 'layout';
      case 'add-invitee':
        return 'add-invitee';
      case 'event-setting':
        return 'event-setting';
      default:
        return 'add-element';
    }
  };

  const handleMenuClick = ({
    key,
  }: {
    key: 'add-element' | 'layout' | 'add-invitee' | 'event-setting' | string;
  }) => {
    appNav?.items.map((item) => {
      if (item.key === key) {
        if (item.destination !== '') {
          push(item?.destination);
        }
      }
    });
    appNav?.footerMenuItems.map((item) => {
      if (item.key === key) {
        if (item.destination !== '') {
          push(item?.destination);
        }
      }
    });
    if (key === 'layout') {
      if (selectedKey === 'layout') {
        setToggleLeftDrawer((prev) => !prev);
      } else {
        setToggleLeftDrawer(false);
      }
    } else {
      setToggleLeftDrawer(false);
    }
    setSelectedKey(key);
    setLeftDrawerKey(getLeftDrawerKey(key));
  };

  return (
    <Sider
      collapsed={true}
      collapsedWidth={50}
      className="dash-sider border-r border-r-neutral-600  p-0 text-lg shadow-sm border-border/100"
      width={50}
      style={{
        overflow: 'auto',
        position: 'fixed',
        height: '100vh',
        scrollbarWidth: 'none',
        scrollbarColor: 'red',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 100,
      }}
    >
      <Menu
        className="sider-menu mt-10 mb-24 text-card-foreground text-[16px]"
        mode="inline"
        items={appNav?.items}
        defaultSelectedKeys={[]}
        selectedKeys={
          urlPath?.[1] === '' && selectedKey === ''
            ? ['add-element']
            : selectedKey !== ''
              ? [selectedKey]
              : [urlPath?.[1] ?? '']
        }
        onClick={handleMenuClick}
      ></Menu>
      <Menu
        className="bottom-5 text-card-foreground text-[16px]"
        mode="inline"
        items={appNav?.footerMenuItems}
        defaultSelectedKeys={[]}
        selectedKeys={
          urlPath?.[1] === '' && selectedKey === ''
            ? []
            : selectedKey !== ''
              ? [selectedKey]
              : [urlPath?.[1] ?? '']
        }
      />
    </Sider>
  );
};

export default SideNav;
