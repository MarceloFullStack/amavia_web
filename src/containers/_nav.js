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
    _children: ['Primeiro domínio']
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
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Outro dominio'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Páginas',
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
