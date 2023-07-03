import React from 'react';
import axios from 'axios';
import Navbar from '../../components/_App/Navbar';
import baseUrl from '../../utils/baseUrl';
import Footer from '../../components/_App/Footer';
import Footer1 from '../../components/_App/Footer1';
import StickyBox from "react-sticky-box";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from 'react';
import MovingComponent from 'react-moving-text'

// import leaflet
import GoogleMapReact from 'google-map-react';
import SocialShare from '../../components/SingleSpots/SocialShare';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const roofdecksAmenities = [
    { title: 'Swimming Pool', icon: 'fa-swimming-pool' },
    { title: 'Fitness Center', icon: 'fa-dumbbell' },
    { title: 'Barbecue Area', icon: 'fa-fire' },
    { title: 'Lounge', icon: 'fa-couch' },
    // Add more amenities as needed
]

const Modal = ({ imageUrl, onClose }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <img src={imageUrl} alt="Full Screen" className="modal-image" />
        </div>
      </div>
    );
  };

const AnimationsForChaining = ["effect3D", "blur", "fadeOutToLeft", "fadeOutToRight", "bounce", "flash"]
const selectedItems = AnimationsForChaining[Math.floor(Math.random() * AnimationsForChaining.length)]
const AnyReactComponent = ({ text }) => (
    <div style={{
        backgroundImage: 'url("/images/logo2.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #fff',
        boxShadow: '0 0 0 2px #f44336',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '16px',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        padding: '5px',
        boxSizing: 'border-box'
        
    }}>
        {text}
        </div>
);

const SingleSpots = ({ user, listing, images }) => {
    
    const [ animationIndex, setAnimationIndex ] = useState(0)
    const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

    const handleChainAnimation = () => {
        setAnimationIndex(animationIndex+1)
        setAnimationType(selectedItems[animationIndex+1])
    }

    const defaultProps = {
        center: {
          lat: listing.lat,
          lng: listing.log
        },
        zoom: 14
      };

      const [isModalOpen, setModalOpen] = useState(false);
      const [selectedImageUrl, setSelectedImageUrl] = useState('');
    
      const openModal = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setSelectedImageUrl('');
        setModalOpen(false);
      };

    return (
        <>
            <Navbar userRole={user} />
            
            {listing.hasVideo ? (
                <section className='listings-details-area pb-70'>
                    <div className='listings-details-image'>
                        <iframe
                            src={listing.videoUrl}
                            width='100%'
                            height='100%'
                            frameBorder='0'
                            allow='autoplay; fullscreen'
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            ) : (
                // parse json single_spot json data
                <section className='listings-details-area pb-70'>
                    
                    <div className='listings-details-image'>
                        <motion.img
                            src={listing.mainImage}
                            alt='image'
                            variants={container}
                            initial='hidden'
                            animate='visible'
                            style={{ width: "100%", height: "600px" }}
                        />
                    
                        <div className='container'>
                            <div className='container'>
                                <div className='listings-details-content'>
                                <span className='meta'>
                                <i className='flaticon-furniture-and-household'></i>
                                {listing.category}
                                </span>

                                <motion.h1
                                    className='title'
                                    variants={container}
                                    initial='hidden'
                                    animate='visible'
                                    style={{
                                        fontSize: "40px",
                                        fontWeight: "bold",
                                        color: "#FFFFFF",
                                        marginBottom: "10px",
                                        textTransform: "uppercase",

                                    }}
                                >
                                    <MovingComponent
                                        onAnimationEnd={handleChainAnimation}
                                        type={animationType}
                                        duration="1000ms"
                                        timing="linear"
                                        fillMode="forwards"
                                        iteration={1}
                                        >
                                        {listing.listingTitle}
                                    </MovingComponent>
                                </motion.h1>
                                
                                <motion.h2
                                    className='title'
                                    variants={container}
                                    initial='hidden'
                                    animate='visible'
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        color: "#FFFFFF",
                                        marginBottom: "10px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {listing.streetAddress}, {listing.city}, {listing.state} {listing.zipcode}
                                </motion.h2>

                                <motion.ul
                                    className='info-list'
                                    variants={container}
                                    initial='hidden'
                                    animate='visible'
                                    style={{
                                        display: "flex",
                                        justifyContent: "right",
                                        listStyle: "none",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <motion.li
                                        variants={item}
                                        style={{
                                            fontSize: "16px",
                                            textTransform: "uppercase",
                                            marginRight: "20px",
                                            backgroundColor: "#f7f7f7",
                                            padding: "10px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        <i className='flaticon-bed'></i> {listing.bedrooms} Bedrooms
                                    </motion.li>
                                    <motion.li
                                        variants={item}
                                        style={{
                                            fontSize: "16px",
                                            textTransform: "uppercase",
                                            marginRight: "20px",
                                            backgroundColor: "#f7f7f7",
                                            padding: "10px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        <i className='flaticon-bathtub'></i> {listing.bathrooms} Bathrooms
                                    </motion.li>
                                    <motion.li
                                        variants={item}
                                        style={{
                                            fontSize: "16px",
                                            textTransform: "uppercase",
                                            marginRight: "20px",
                                            backgroundColor: "#f7f7f7",
                                            padding: "10px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        <i className='flaticon-garage'></i> {listing.garages} Garages
                                    </motion.li>
                                    <motion.li
                                        variants={item}
                                        style={{
                                            fontSize: "16px",
                                            textTransform: "uppercase",
                                            marginRight: "20px",
                                            backgroundColor: "#f7f7f7",
                                            padding: "10px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        <i className='flaticon-square'></i> {listing.area} sq ft
                                    </motion.li>
                                </motion.ul>
              </div>
            </div>
          </div>
        </div>
 
        <div className='container'>
          <div className='row'>
            <motion.div
              className='breadcrumbs'
              variants={container}
              initial='hidden'
              animate='visible'
              style={{ 
                display: "flex",
                justifyContent: "left",
                marginBottom: "20px",
                marginTop: "20px",
                listStyle: "none",
              }}
            >
              <motion.li
                variants={item}
                style={{
                  fontSize: "16px",
                  textTransform: "uppercase",
                  marginRight: "20px",
                  backgroundColor: "#f7f7f7",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </motion.li>

              <motion.li
                variants={item}
                autoCorrect='true'
                style={{
                  fontSize: "16px",
                  
                  marginRight: "20px",
                  backgroundColor: "#f7f7f7",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Link href='/listings'>
                  <a>Listings</a>
                </Link>
              </motion.li>

              <motion.li
                variants={item}
                style={{
                  fontSize: "16px",
                  textTransform: "uppercase",
                  marginRight: "20px",
                  backgroundColor: "#f7f7f7",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Link href='/listings'>
                  <a>{listing.listingTitle}</a>
                </Link>
              </motion.li>

            </motion.div>
          </div>
          <hr />

          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='listings-details-desc'>
                <div 
                  className='listings_details_content'
                  dangerouslySetInnerHTML={{ __html: listing.spotDescription.long}} 
                />
                <hr />
                {/* notables points */}
                <div className='listing-notable-points'>
                    <h3 className='title'>Notable Points</h3>
                    <div className='row'>
                        <div className='col-lg-12 col-md-6'>
                            <ul className='listing-notable-points-list'>
                                <li>
                                    <i className='flaticon-check'></i> {listing.notablePoints.point}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <h3>Image Gallery</h3>
                        <div className="image-gallery">
                            {/* Render your image thumbnails here */}
                            <img src={listing.mainImage} alt="Image 1" onClick={() => openModal('image1.jpg')} width={150} />
                            <img src={listing.mainImage} alt="Image 1" onClick={() => openModal('image1.jpg')} width={150} />
                            <img src={listing.mainImage} alt="Image 1" onClick={() => openModal('image1.jpg')} width={150} />
                        </div>  
        
                        {isModalOpen && (
                        <Modal imageUrl={selectedImageUrl} onClose={closeModal} />
                        )}                        
                    </div>

                </div>

                <hr />
                {/* end notables points */}

                {/* amenities */}
                <div className='listing-amenities'>
                    <h3 className='title'>Amenities</h3>
                    <div className='row'>
                        <div className='col-lg-12 col-md-6'>
                            {listing.amenities.map((amenity, index) => (
                              <span key={index} className='badge'>
                                <i className='flaticon-check'></i> {amenity.slice(1).toUpperCase() }
                              </span>
                            ))}
                        </div>
                    </div>
                </div>
                {/* end amenities */}
                <hr />

                {/* social media share buttons */}
                <motion.div
                    className='listing-share'
                    variants={container}
                    initial='hidden'
                    animate='visible'
                    style={{
                        // display share button in the row to the left
                        display: "flex",
                        justifyContent: "right",
                        listStyle: "none",
                        marginBottom: "20px",
                        listStyle: "none",
                        listStyleType: "none",
                        padding: "0",
                        margin: "0",
                        alignContent: "right",
                        alignItems: "right",
                    }}
                >
                    <h3 className='title'>Share</h3>
                    <SocialShare 
                        url={"https://www.google.com"}
                        title={listing.listingTitle + " Share love with your friends"}
                        
                    />

                </motion.div>
   
                <div id='review'>
                  <div className='listings-review-comments'>
                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user1.jpg' alt='image' />
                              <div className='title'>
                                <h4>James Andy</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user2.jpg' alt='image' />
                              <div className='title'>
                                <h4>Sarah Taylor</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user3.jpg' alt='image' />
                              <div className='title'>
                                <h4>Jason Smith</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id='add-review'>
                  <div className='review-form-wrapper'>
                    <h3>Add A Review</h3>
                    <p className='comment-notes'>
                      Your email address will not be published. Required fields
                      are marked <span>*</span>
                    </p>

                    <form>
                      <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                          <div className='sub-ratings'>
                            <div className='row'>
                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Cleanliness</h4>
                                  <div className='cleanliness-rating'>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar5'
                                      name='cleanliness-rating'
                                      value='5'
                                    />
                                    <label htmlFor='cleanlinessStar5'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar4'
                                      name='cleanliness-rating'
                                      value='4'
                                    />
                                    <label htmlFor='cleanlinessStar4'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar3'
                                      name='cleanliness-rating'
                                      value='3'
                                    />
                                    <label htmlFor='cleanlinessStar3'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar2'
                                      name='cleanliness-rating'
                                      value='2'
                                    />
                                    <label htmlFor='cleanlinessStar2'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar1'
                                      name='cleanliness-rating'
                                      value='1'
                                    />
                                    <label htmlFor='cleanlinessStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Accuracy</h4>
                                  <div className='accuracy-rating'>
                                    <input
                                      type='radio'
                                      id='accuracyStar5'
                                      name='accuracy-rating'
                                      value='5'
                                    />
                                    <label htmlFor='accuracyStar5'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar4'
                                      name='accuracy-rating'
                                      value='4'
                                    />
                                    <label htmlFor='accuracyStar4'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar3'
                                      name='accuracy-rating'
                                      value='3'
                                    />
                                    <label htmlFor='accuracyStar3'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar2'
                                      name='accuracy-rating'
                                      value='2'
                                    />
                                    <label htmlFor='accuracyStar2'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar1'
                                      name='accuracy-rating'
                                      value='1'
                                    />
                                    <label htmlFor='accuracyStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Location</h4>
                                  <div className='location-rating'>
                                    <input
                                      type='radio'
                                      id='locationStar5'
                                      name='location-rating'
                                      value='5'
                                    />
                                    <label htmlFor='locationStar5'></label>
                                    <input
                                      type='radio'
                                      id='locationStar4'
                                      name='location-rating'
                                      value='4'
                                    />
                                    <label htmlFor='locationStar4'></label>
                                    <input
                                      type='radio'
                                      id='locationStar3'
                                      name='location-rating'
                                      value='3'
                                    />
                                    <label htmlFor='locationStar3'></label>
                                    <input
                                      type='radio'
                                      id='locationStar2'
                                      name='location-rating'
                                      value='2'
                                    />
                                    <label htmlFor='locationStar2'></label>
                                    <input
                                      type='radio'
                                      id='locationStar1'
                                      name='location-rating'
                                      value='1'
                                    />
                                    <label htmlFor='locationStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Check-in</h4>
                                  <div className='checkin-rating'>
                                    <input
                                      type='radio'
                                      id='checkInStar5'
                                      name='rating'
                                      value='5'
                                    />
                                    <label htmlFor='checkInStar5'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar4'
                                      name='rating'
                                      value='4'
                                    />
                                    <label htmlFor='checkInStar4'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar3'
                                      name='rating'
                                      value='3'
                                    />
                                    <label htmlFor='checkInStar3'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar2'
                                      name='rating'
                                      value='2'
                                    />
                                    <label htmlFor='checkInStar2'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar1'
                                      name='rating'
                                      value='1'
                                    />
                                    <label htmlFor='checkInStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Communication</h4>
                                  <div className='communication-rating'>
                                    <input
                                      type='radio'
                                      id='communicationStar5'
                                      name='communication-rating'
                                      value='5'
                                    />
                                    <label htmlFor='communicationStar5'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar4'
                                      name='communication-rating'
                                      value='4'
                                    />
                                    <label htmlFor='communicationStar4'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar3'
                                      name='communication-rating'
                                      value='3'
                                    />
                                    <label htmlFor='communicationStar3'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar2'
                                      name='communication-rating'
                                      value='2'
                                    />
                                    <label htmlFor='communicationStar2'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar1'
                                      name='communication-rating'
                                      value='1'
                                    />
                                    <label htmlFor='communicationStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Value</h4>
                                  <div className='value-rating'>
                                    <input
                                      type='radio'
                                      id='valueStar5'
                                      name='value-rating'
                                      value='5'
                                    />
                                    <label htmlFor='valueStar5'></label>
                                    <input
                                      type='radio'
                                      id='valueStar4'
                                      name='value-rating'
                                      value='4'
                                    />
                                    <label htmlFor='valueStar4'></label>
                                    <input
                                      type='radio'
                                      id='valueStar3'
                                      name='value-rating'
                                      value='3'
                                    />
                                    <label htmlFor='valueStar3'></label>
                                    <input
                                      type='radio'
                                      id='valueStar2'
                                      name='value-rating'
                                      value='2'
                                    />
                                    <label htmlFor='valueStar2'></label>
                                    <input
                                      type='radio'
                                      id='valueStar1'
                                      name='value-rating'
                                      value='1'
                                    />
                                    <label htmlFor='valueStar1'></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Name *'
                            />
                          </div>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                          <div className='form-group'>
                            <input
                              type='email'
                              className='form-control'
                              placeholder='Email *'
                            />
                          </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <div className='form-group'>
                            <textarea
                              placeholder='Your review'
                              className='form-control'
                              cols='30'
                              rows='6'
                            ></textarea>
                          </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <p className='comment-form-cookies-consent'>
                            <input type='checkbox' id='test1' />
                            <label htmlFor='test1'>
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </p>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <button type='submit'>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <StickyBox offsetTop={90} offsetBottom={20}>
                <div className='listings-sidebar'>
                  <div className='listings-widget book_listings'>
                    <h3>Booking Online</h3>
                    <a href='#' className='default-btn'>
                      Book Now
                    </a>
                    <span>
                      By <a href='#'>Booking.com</a>
                    </span>
                  </div>

                  <div className='listings-widget listings_contact_details'>
                    <h3>Contact Details</h3>
                    <ul>
                      <li>
                        <i className='bx bx-envelope' ></i>
                        <a href={`mailto:${listing.email}`}>{listing.email}</a>
                      </li>

                      <li>
                        <i className='bx bx-phone-call'></i>
                        <a href={`tel:${listing.phone}`}>{listing.phone}</a>
                      </li>

                      <li>
                        <i className='bx bx-globe'></i>
                        <a href={`${listing.website}`}>{listing.website}</a>
                      </li>
                      
                      <li>
                        <i className='bx bx-map'></i> {listing.streetAddress}, {listing.city}, {listing.state}, {listing.zipcode}
                      </li>
                      // social media here
                      <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >
                        <i className='bx bxl-facebook'></i>
                        <a href={`${listing.facebook}`}>Facebook</a>
                        </motion.li>
                        <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >
                        <i className='bx bxl-twitter'></i>
                        <a href={`${listing.twitter}`}>Twitter</a>
                        </motion.li>
                        <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >
                        <i className='bx bxl-instagram'></i>
                        <a href={`${listing.instagram}`}>Instagram</a>
                        </motion.li>
                        
                    </ul>
                  </div>

                  {/* amenities */}
                    <div className='listings-widget listings_amenities'>
                        <h3>Amenities</h3>
                        <ul>
                            {roofdecksAmenities.map((amenity, index) => (
                                <li key={index}>
                                    <i className={amenity.icon}></i> {amenity.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* amenities */}

                    {/* tags */}
                    <div className='listings-widget listings_tags'>
                        <h3>Tags</h3>
                        {listing.tags.map((tag, index) => (
                            <span key={index} className="badge">
                                <Link href="#">
                                    <a>{tag}</a>
                                </Link>
                            </span>
                            
                        ))}
                                
                    </div>
                    {/* tags */}
                </div>
                <div className='listings-sidebar'>
                    <div className='map'>
                        <div style={{ height: '80vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={listing.lat}
                                    lng={listing.log}
                                    text=''
                                />
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
              </StickyBox>
            </div>
          </div>
        </div>
        

      </section>

            )}
            <Footer1 />
        </>
    );
};

export async function getServerSideProps({ query }) {
    const id = query.id;
    const res = await axios.get(`${baseUrl}/api/v1/spots/${id}`);
    const listing = await res.data;
    console.log(id);
    console.log(listing.hasVideo);
    
    return {
        props: {
        listing,
    },
    };
}

export default SingleSpots;