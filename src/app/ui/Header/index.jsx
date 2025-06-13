'use client';
import { useEffect, useState } from 'react';
import Div from '@/app/ui/Div';
import Link from 'next/link';
import ContactInfoWidget from '@/app/ui/Widget/ContactInfoWidget';
import Newsletter from '@/app/ui/Widget/Newsletter';
import SocialWidget from '@/app/ui/Widget/SocialWidget';
import Image from 'next/image';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <Image
                    src="/images/logorempl.png"
                    alt="Logo"
                    width={150}
                    height={40}
                  />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <nav className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    id="cs-main-nav"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li>
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" onClick={() => setMobileToggle(false)}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Works
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" onClick={() => setMobileToggle(false)}>
                        News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        onClick={() => setMobileToggle(false)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <button
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                    aria-label="Toggle mobile menu"
                    aria-expanded={mobileToggle}
                    aria-controls="cs-main-nav"
                  >
                    <span />
                  </button>
                </nav>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <button
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                    aria-label="Toggle side panel"
                    aria-expanded={sideHeaderToggle}
                    aria-controls="cs-side-header"
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </button>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        id="cs-side-header"
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
          aria-label="Close side panel"
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <Image src="/images/logorempl.png" alt="Logo" width={150} height={40} />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Have a project in mind? <br /> Let&rsquo;s connect and bring it to life.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="Join our mailing list to receive the latest news, updates, and exclusive offers directly in your inbox."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
