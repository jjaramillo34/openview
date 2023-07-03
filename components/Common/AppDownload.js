import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';

const AppDownload = () => {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.indiceapp';
  const appStoreUrl = 'https://apps.apple.com/us/app/indice/id1571929239';
  const windowsStoreUrl = 'https://www.microsoft.com/en-us/p/indice/9nblggh4wz3t?activetab=pivot:overviewtab';
  return (
    <>
      <section className='app-download-area bg-main-color'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5 col-md-12'>
              <div className='app-download-content'>
                <h2>Download Indice App</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
                <div className='btn-box'>
                  <a 
                    href='https://play.google.com/store/games' 
                    className='playstore-btn' 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <img src='/images/play-store.png' alt='image' />
                    GET IT ON
                    <span>Google Play</span>
                  </a>
                 
                  <a 
                    href='https://www.apple.com/store' 
                    className='applestore-btn' 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <img src='/images/apple-store.png' alt='image' />
                    Download on the
                    <span>Apple Store</span>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-7 col-md-12'>
              <div className='app-download-image'>
                <img src='/images/app-download.png' alt='image' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDownload;
