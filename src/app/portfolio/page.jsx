'use client'
import { useEffect, useState } from 'react';
import { useDynamicBg } from '../context/DynamicBgContext';
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import Spacing from "@/app/ui/Spacing";
import portfolioData from '@public/data/portfolio.json';
import Link from 'next/link';
import Image from 'next/image';
import JarallaxHero from '../ui/JarallaxHero';

const categoryMenu = [
  { title: 'All', category: 'all' },
  { title: 'Branding', category: 'Branding' },
  { title: 'Design', category: 'Design' },
  { title: 'Photo', category: 'Photo' },
];

const ITEMS_PER_PAGE = 12;

export default function PortfolioPage() {
  const { setBackground, setHeroImage } = useDynamicBg();
  const [active, setActive] = useState('all');
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    setBackground('');
    setHeroImage('');
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
      <JarallaxHero
        image="/images/portfolio_hero_bg.jpeg"
      />
      <main className="vlt-main-holder vlt-main-padding">
        <Div className="container">
          <Div className="vlt-portfolio-grid-filters">
            {categoryMenu.map((item, index) => (
              <span
                key={index}
                className={`cbp-filter-item ${active === item.category ? 'cbp-filter-item-active' : ''}`}
                onClick={() => {
                  setActive(item.category);
                  setVisibleItems(ITEMS_PER_PAGE);
                }}
              >
                {item.title}
              </span>
            ))}
          </Div>
          
          <Div className="row">
            {filteredData.slice(0, visibleItems).map((item, index) => (
              <Div className="col-lg-4 col-md-6" key={index}>
                 <article className="cbp-item vlt-portfolio-grid-item vlt-portfolio-style2">
                  <div className="vlt-portfolio-grid-image">
                    <Link className="vlt-portfolio-grid-link" href={`/portfolio/${item.id}`}>
                      <Image 
                        src={item.imgUrl} 
                        alt={item.title}
                        width={380}
                        height={380}
                        style={{objectFit: 'cover'}}
                      />
                    </Link>
                  </div>
                  <div className="vlt-portfolio-grid-content">
                    <h5 className="vlt-portfolio-grid-title">
                      <Link href={`/portfolio/${item.id}`}>{item.title}</Link>
                    </h5>
                    <p className="vlt-portfolio-grid-cat">{item.subtitle}</p>
                  </div>
                </article>
                <Spacing lg="30" md="30" />
              </Div>
            ))}
          </Div>

          {showLoadMore && (
            <nav className="vlt-pagination-load-more-btn">
              <span className="vlt-btn vlt-btn-primary vlt-btn-ajax-load" onClick={handleLoadMore}>
                Load More
              </span>
            </nav>
          )}
        </Div>
      </main>
      <Spacing lg="145" md="80" />
      <Cta
        title="contact@remlyx.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
