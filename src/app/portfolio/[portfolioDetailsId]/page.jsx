'use client'
import { notFound } from 'next/navigation';
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import Gallery from "@/app/ui/Gallery";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import portfolioData from '../../../../public/data/portfolio.json';

export async function generateStaticParams() {
  return portfolioData.map(portfolio => ({
    portfolioDetailsId: portfolio.id,
  }));
}

export default function PortfolioDetailsPage({ params }) {
  const portfolioId = params.portfolioDetailsId;
  const portfolio = portfolioData.find(item => item.id === portfolioId);

  if (!portfolio) {
    notFound();
  }

  const currentIndex = portfolioData.findIndex(item => item.id === portfolioId);
  const nextProjectId =
    currentIndex < portfolioData.length - 1
      ? portfolioData[currentIndex + 1].id
      : null;
  const prevProjectId =
    currentIndex > 0 ? portfolioData[currentIndex - 1].id : null;

  return (
    <>
      <PageHeading 
        title='Portfolio Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={portfolio.title}
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <SectionHeading 
          title={portfolio.title} 
          subtitle={portfolio.subtitle} 
        />
        <Spacing lg='40' md='20'/>
        <Gallery gallery={portfolio.gallery} />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <p>{portfolio.description}</p>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>{portfolio.category}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>{portfolio.location}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>{portfolio.software}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>{portfolio.dated}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>{portfolio.client}</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
          <Div className="cs-page_navigation cs-center">
            <Div>
              {prevProjectId && (
                <Button btnLink={`/portfolio/${prevProjectId}`} btnText='Prev Project' variant='cs-type1'/>
              )}
            </Div>
            <Div>
              {nextProjectId && (
                <Button btnLink={`/portfolio/${nextProjectId}`} btnText='Next Project'/>
              )}
            </Div>
          </Div>
      </Div>
      <Spacing lg='145' md='80'/>
      <Cta 
        title='contact@remlyx.com' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  )
}
