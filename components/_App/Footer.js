import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = ({ bgColor }) => {

  const footerMenuRight = [
    {
      title: 'About',
      menuItems: [
        {
          url: '/about',
          text: 'About Indice',
        },
        {
          url: '/blog',
          text: 'Recent News',
        },
        {
         url: '/testimonial',
          text: 'Investor Relations',
        },
        {
          url: '/terms-and-condition',
          text: 'Terms And Condition',
        },
        {
          url: '/privacy-policy',
          text: 'Privacy Policy',
        },
        {
          url: '#',
          text: 'Careers',
        },
      ],
    },
    {
      title: 'Discover',
      menuItems: [
        {
          url: '/faq',
          text: 'FAQ',
        },
        {
          url: '/event',
          text: 'Events',
        },
        {
          url: '/single-event',
          text: 'Single Event',
        },
        {
          url: '/contact',
          text: 'Customer Support',
        },
        {
          url: '/testimonial',
          text: 'Testimonials',
        },
        {
          url: '/blog',
          text: 'Our Blog',
        },
      ],
    },
    {
      title: 'Resources',
      menuItems: [
        {
          url: '/about',
          text: 'About Us',
        },
        {
          url: '/Testimonials',
          text: 'Testimonials',
        },
        {
          url: '/faq',
          text: "FAQ's",
        },
        {
          url: '/listings',
          text: 'Bussiness Support',
        },
        {
          url: '/contact',
          text: 'Contact Us',
        },
      ],
    },
  ];

  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`footer-area ${bgColor ? bgColor : ''}`}
        style={{ 
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
          color: "white",
          opacity: "0.9",
        }}
      >

        <div className='container'>
          <div className='row'>
            {footerMenuRight.map((item, index) => (
              <div className='col-lg-3 col-sm-6 col-md-6' key={index}>
                <div className='single-footer-widget'>
                  <h3>{item.title}</h3>
                  <ul className='footer-links-list'>
                    {item.menuItems.map((menuItem, index) => (
                      <li key={index}>
                        <Link href={menuItem.url}>
                          <a>{menuItem.text}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          
          <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Languages</h3>
                <div className='languages-switch'>
                  <select>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Russian</option>
                    <option>Chinese</option>
                  </select>
                </div>

                <h3>Countries</h3>
                <div className='country-switch'>
                  <select>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Spain</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='copyright-area'>
            <p>
              &copy; {new Date().getFullYear()} Indice. All Rights Reserved by{' '}
              <a href='https://theopenview.com/' target='_blank'>
                The Open View
              </a>

            </p>
          </div>
        </div>

        <div className='footer-image text-center'>
          <img src='/images/footer-image.png' alt='image' />
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;

