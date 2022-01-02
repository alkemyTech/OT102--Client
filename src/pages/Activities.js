import React from 'react'
// import { Outlet } from 'react-router-dom'
import ListActivities from '../components/activity/ListActivities'
import Banner from '../components/Banner'
import PageHeader from '../components/PageHeader'

export default function Activities() {
  return (
    <>
      <Banner img="/images/banner-top3.jpg" display={{ base: 'none', md: 'flex' }} />
      <PageHeader title="ACTIVIDADES" display={{ base: 'none', md: 'flex' }} />
      <ListActivities />
      {/* <Outlet /> */}
    </>
  )
}
