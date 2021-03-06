import {
  CCreateElement,
  CSidebar,
  CSidebarBrand, CSidebarMinimizer, CSidebarNav,
  CSidebarNavDivider, CSidebarNavDropdown,
  CSidebarNavItem, CSidebarNavTitle
} from "@coreui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import amavia_logo from 'src/assets/logo/amavia.png';
// sidebar nav config
import navigation from "./_nav";



const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sideBarReducer.sidebarShow);

  console.log(show);
  // const show = true
  return (
    <CSidebar
      show={show}
      className="amavia__bg"
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none tw-h-full" to="/" style={{ backgroundColor: 'white' }}>
        <img src={amavia_logo} alt="..." height={60} className='tw-object-contain tw-h-24 tw-w-full tw-bg-white tw-p-2'/>
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
