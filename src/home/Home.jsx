import React from 'react'
import Feature from '../components/Featured/Feature'
import Navbar from '../components/Navbar/Navbar'
import List from '../components/List/List'

export default function Home() {
  return (
    <div className='homeCss'>
    <Navbar />
    <Feature type={"movie"}/>
    <List></List>
    <List></List>
    <List></List>
    </div>
  )
}
