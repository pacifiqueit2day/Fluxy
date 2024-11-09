import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import CardData from '../../components/cards/CardData'
import { People } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

export default function Dashboard() {
  return (
    <DefaultLayout>
      <div className='grid grid-cols-4 gap-x-2'>

        <NavLink
          to="employee/list">
        <CardData title="Employee" total="15">
          <People size={24} />
        </CardData>
        </NavLink>

        <CardData title="Costomers" total="900">
          <People size={24} />
        </CardData>
        <CardData title="Suppliers" total="02">
          <People size={24} />
        </CardData>
        <CardData title="Visitors" total="20">
          <People size={24} />
        </CardData>
      </div>
    </DefaultLayout>
  )
}
