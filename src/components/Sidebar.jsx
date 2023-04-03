import React from "react";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#000" backgroundColor="#fff">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            React Flow
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/negocios" activeClassName="activeClicked">
              <CDBSidebarMenuItem color={"#000"} icon="columns">Negócios</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/projetos" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Projetos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/finanças" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Finanças</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Roger Valentim
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

