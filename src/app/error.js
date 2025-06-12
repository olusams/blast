'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Div from './ui/Div';
import Button from './ui/Button';
import { handleError } from './utils/errorLogger';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to our error tracking service
    handleError(error, {
      component: 'ErrorBoundary',
      action: 'render',
    });
  }, [error]);

  return (
    <Div className="cs-error_page">
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8 offset-lg-2 text-center">
            <h1 className="cs-error_title cs-font_50 cs-white_color animate__animated animate__fadeInDown">
              Oops!
            </h1>
            <h2 className="cs-error_subtitle cs-font_30 cs-white_color animate__animated animate__fadeInUp">
              Something went wrong
            </h2>
            <p className="cs-error_text cs-white_color animate__animated animate__fadeInUp animate__delay-1s">
              {error?.message || 'An unexpected error occurred. Please try again.'}
            </p>
            <Div className="cs-error_btn_group animate__animated animate__fadeInUp animate__delay-2s">
              <Button
                btnLink="/"
                btnText="Back to Home"
                variant="cs-style1"
              />
              <Button
                btnLink="/contact"
                btnText="Contact Support"
                variant="cs-style1 cs-type1"
              />
              <Button
                onClick={() => reset()}
                btnText="Try Again"
                variant="cs-style1"
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
} 