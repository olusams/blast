import React, { useState, useEffect, useRef } from 'react';
import Div from '../Div';

export default function VideoModal({ videoSrc, bgUrl, variant, videoTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Focus trapping
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = e => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      firstElement?.focus();
      modalRef.current.addEventListener('keydown', handleTabKeyPress);

      return () => {
        modalRef.current?.removeEventListener('keydown', handleTabKeyPress);
      };
    }
  }, [isOpen]);

  const getYouTubeVideoId = url => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(videoSrc);

  return (
    <>
      <button
        className={`cs-video_block ${
          variant ? variant : 'cs-style1'
        } cs-video_open cs-bg`}
        style={{ backgroundImage: `url(${bgUrl})` }}
        onClick={() => setIsOpen(true)}
        aria-label={`Play video: ${videoTitle}`}
      >
        <span className="cs-player_btn cs-accent_color">
          <span />
        </span>
      </button>
      {isOpen && (
        <Div
          className="cs-video_popup active"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          ref={modalRef}
        >
          <Div
            className="cs-video_popup_overlay"
            onClick={() => setIsOpen(false)}
          />
          <Div className="cs-video_popup_content">
            <Div className="cs-video_popup_layer" />
            <Div className="cs-video_popup_container">
              <h2 id="video-modal-title" className="cs-sr_only">
                {videoTitle}
              </h2>
              <Div className="cs-video_popup_align">
                <Div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Div>
              </Div>
              <button
                className="cs-video_popup_close"
                onClick={() => setIsOpen(false)}
                aria-label="Close video modal"
              />
            </Div>
          </Div>
        </Div>
      )}
    </>
  );
}
