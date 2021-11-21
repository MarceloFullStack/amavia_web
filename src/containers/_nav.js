import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Lojas']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Lojas',
    route: 'lojas',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Visualizar lojas',
        to: '/lojas',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cadastrar Loja',
        to: '/lojas/new_loja',
      },
    ],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Vendedores']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Vendedores',
    route: 'vendedores',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Visualizar vendedores',
        to: '/vendedores/show_vendedores',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cadastrar Vendedor',
        to: '/vendedores/new_vendedor',
      },
    ],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Metas e Objetivos']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Metas',
    route: 'metas',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Cadastrar metas',
        to: '/metas',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Objetivos',
    route: 'servicos',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Cadastrar objetivos',
        to: '/servicos',
      }
    ],
  },


  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Vendas'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Vendas',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'outro_valor',
        to: '/login',
      },

    ],
  }
]

export default _nav
