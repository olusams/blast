'use client'
import { useEffect, useState } from 'react';
import { useDynamicBg } from '../context/DynamicBgContext';
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Portfolio from "@/app/ui/Portfolio";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import portfolioData from '@public/data/portfolio.json';

const categoryMenu = [
  { title: 'All', category: 'all' },
  { title: 'Branding', category: 'Branding' },
  { title: 'Design', category: 'Design' },
  { title: 'Photo', category: 'Photo' },
];

const ITEMS_PER_PAGE = 10;

export default function PortfolioPage() {
  const { setBackground, setHeroImage } = useDynamicBg();
  const [active, setActive] = useState('all');
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    setBackground('/images/hero_bg.jpeg');
    setHeroImage('/images/portfolio_hero_bg.jpeg');
    return () => {
      setBackground('');
      setHeroImage('');
    }
  }, [setBackground, setHeroImage]);

  const filteredData =
    active === 'all'
      ? portfolioData
      : portfolioData.filter(item => item.subtitle === active);

  const showLoadMore = visibleItems < filteredData.length;

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + ITEMS_PER_PAGE);
  };

  return (
    <>
      <PageHeading
        title="Our Work"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading
            title="Some of our recent work"
            subtitle="Our Portfolio"
          />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              {categoryMenu.map((item, index) => (
                <li key={index} className={active === item.category ? 'active' : ''}>
                  <span onClick={() => {
                    setActive(item.category);
                    setVisibleItems(ITEMS_PER_PAGE);
                  }}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {filteredData.slice(0, visibleItems).map((item, index) => (
            <Div className="col-lg-5ths col-sm-6" key={index}>
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={`/portfolio/${item.id}`}
                src={item.imgUrl}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        {showLoadMore && (
          <>
            <Spacing lg="90" md="45" />
            <Div className="text-center">
              <span className="cs-btn cs-style1 cs-btn_lg" onClick={handleLoadMore}>
                Load More
              </span>
            </Div>
          </>
        )}
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="contact@remlyx.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
