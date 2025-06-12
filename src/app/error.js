'use client';
import { useEffect } from 'react';
import Div from './ui/Div';
import Button from './ui/Button';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Div className="cs-error_page">
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8 offset-lg-2 text-center">
            <h1 className="cs-error_title cs-font_50 cs-white_color">Oops!</h1>
            <h2 className="cs-error_subtitle cs-font_30 cs-white_color">Something went wrong</h2>
            <p className="cs-error_text cs-white_color">
              We apologize for the inconvenience. Please try again later or contact our support team if the problem persists.
            </p>
            <Div className="cs-error_btn_group">
              <Button
                btnText="Try Again"
                onClick={() => reset()}
                variant="cs-style1"
              />
              <Button
                btnLink="/contact"
                btnText="Contact Support"
                variant="cs-style1 cs-type1"
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
} 