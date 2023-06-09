import React from 'react';
import PropTypes from 'prop-types';

import './Alert.scss';

let proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlName: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['neutral', 'success', 'error', 'warning', 'info']),
  iconNeutral: PropTypes.string,
  isOpen: PropTypes.bool,
};

export const Alert = ({ status, iconNeutral, title, description, url, urlName, isOpen }) => {
  const [showAlert, setShowAlert] = React.useState(isOpen);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div className={`alert-container alert-container__${status}`} role="alert">
          <div className={`alert-container--content`}>
            <header className={`alert-container--header`}>
              <div className="alert-container--principal">
                {status === 'info' && <i className="las la-info-circle la-lg icon__info" />}
                {status === 'success' && <i className="las la-check-circle la-lg icon__success" />}
                {status === 'error' && <i className="las la-exclamation-circle la-lg icon__error" />}
                {status === 'warning' && <i className="las la-exclamation-triangle la-lg icon__warning" />}
                {status === 'neutral' && <i className={`las ${iconNeutral} la-lg`} />}
                <h3 className="alert-container--title">{title}</h3>
              </div>
              <div className="alert-container__icon" onClick={handleCloseAlert}>
                <i className={`las la-times la-lg`} />
              </div>
            </header>
            <main className={`alert-container--action`}>
              <aside className={`alert-container--action__divider alert-container--action__divider__${status}`} />
              <article className={`alert-container--action__description`}>
                <p className={`alert-container--action__description__paragraph`}>{description}</p>
                <a className={`alert-container--action__description__link`} href={url}>
                  {urlName}
                </a>
              </article>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

Alert.propTypes = proptypes;
