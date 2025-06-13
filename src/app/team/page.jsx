'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Section from '../ui/Section';
import Team from '../ui/Team';
import Spacing from '../ui/Spacing';
import { teamData } from '../data/team';

export default function TeamPage() {
  return (
    <>
      <PageHeading
        title="Our Team"
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText="Our Team"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Section
          heading="Our Team"
          subHeading="Meet our team of professional."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
                memberSlug={item.slug}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Cta
            title="Let's disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
