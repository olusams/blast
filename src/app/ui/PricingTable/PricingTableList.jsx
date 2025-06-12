import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? "active" : ""} onClick={()=>setTab('monthly')}>Monthly</li>
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          <PricingTable 
            title='Standard'
            price='350'
            currency='£'
            timeline='From'
            features={['Bespoke Responsive Website', 'Advanced SEO Foundations', 'Keyword Research', 'Social Media Integration', 'eCommerce Ready', 'Google Analytics Setup']}
            btnText='Select Plan'
            btnLink='/'
          />
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          <PricingTable 
            title='Professional'
            price='750'
            currency='£'
            timeline='monthly'
            features={['Everything in Standard', 'Advanced UI/UX Design', 'Content Management System', 'Targeted Facebook Campaign', 'Full eCommerce Solution', 'Google Ads Campaign']}
            btnText='Select Plan'
            btnLink='/'
          />
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          <PricingTable 
            title='Ultimate'
            price='1500'
            currency='£'
            timeline='monthly'
            features={['Everything in Professional', 'Advanced Animations', 'Comprehensive Digital Strategy', 'Ongoing SEO & Content Marketing', 'Priority Support', 'Monthly Performance Reports']}
            btnText='Select Plan'
            btnLink='/'
          />
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
