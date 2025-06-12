'use client';
import Link from 'next/link';
import Div from './ui/Div';
import Button from './ui/Button';

export default function NotFound() {
  return (
    <Div className="cs-error_page">
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8 offset-lg-2 text-center">
            <h1 className="cs-error_title cs-font_50 cs-white_color">404</h1>
            <h2 className="cs-error_subtitle cs-font_30 cs-white_color">Page Not Found</h2>
            <p className="cs-error_text cs-white_color">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
            <Div className="cs-error_btn_group">
              <Button
                btnLink="/"
                btnText="Back to Home"
                variant="cs-style1"
              />
              <Button
                btnLink="/contact"
                btnText="Contact Us"
                variant="cs-style1 cs-type1"
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
} 