import Link from "next/link";
import { motion } from "framer-motion";

const Footer1 = ({ bgColor }) => {
    return (
        <>
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className={`footer-area ${bgColor ? bgColor : ''}`}
							style={{ 
								color: "white",
								opacity: "0.9",
							}}
						>
							
							<div className='container'>
								<div className='row'>
									<motion.h1
										initial={{ opacity: 0 }}
										animate={{ opacity: 5 }}
										transition={{ delay: 0.2 }}
										style={{
											color: "#85C60D",
											fontSize: "30px",
											textAlign: "center",
											margin: "auto",
											padding: "20px",
											display: "block",
										}}
									>
										@OverView
									</motion.h1>

									<p style={{ color: "black", textAlign: "center" }}>
										We are a group of pasionate New Yorkers who want to help to find the best
										places to eat, drink, and have fun in the city. We are here to help you.
									</p>

									<motion.img
										initial={{ opacity: 0 }}
										animate={{ opacity: 5 }}
										transition={{ delay: 0.2 }}
										src='/images/logo2.png'
										alt='logo'
										style={{
											width: "200px",
											height: "auto",
											margin: "auto",
											padding: "20px",
											display: "block",
										}}
									/>
									
									<div className='col-lg-3 col-sm-6'>
										<div className='single-footer-widget'>
											<h3>Indice</h3>
											<ul className='social'>
												<li>
													<a href='https://www.facebook.com/Indice-100101108925634' target='_blank'>
														<motion.i
															initial={{ opacity: 0 }}
															animate={{ opacity: 5 }}
															transition={{ delay: 0.2 }}
															className='bx bxl-facebook'
															style={{
																color: "#85C60D",
																fontSize: "30px",
																backgroundColor: "white",

															}}
														></motion.i>
													</a>
												</li>
												<li>
													<a href='https://twitter.com/Indice_2021' target='_blank'>
														<motion.i
															initial={{ opacity: 0 }}
															animate={{ opacity: 5 }}
															transition={{ delay: 0.2 }}
															className='bx bxl-twitter'
															style={{
																color: "#85C60D",
																fontSize: "30px",
															}}
														></motion.i>

													</a>
												</li>
												<li>
													<a href='https://www.instagram.com/indice_2021/' target='_blank'>
														<motion.i
															initial={{ opacity: 0 }}
															animate={{ opacity: 5 }}
															transition={{ delay: 0.2 }}
															className='bx bxl-instagram'
															style={{
																color: "#85C60D",
																fontSize: "30px",
															}}
														></motion.i>
													</a>
												</li>
											</ul>
										</div>
									</div>

									<div className='col-lg-3 col-lg-6'>
										<div className='single-footer-widget pl-5'>
											<h2>Subscribe</h2>
											<p>
												Subscribe to our newsletter to get the latest news and updates
											</p>
											<motion.form
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ delay: 0.2 }}
												className='newsletter-form'
												data-toggle='validator'
												style={{ 
													display: 'flex',
													flexDirection: 'row',
													justifyContent: 'center',
													alignItems: 'center',
													
													borderRadius: '10px',
													padding: '10px',
													
												}}
											>
												<input
													type='email'
													name='email'
													className='input-newsletter'
													placeholder='Enter your email address'
													required
												/>
												<button type='submit'>Subscribe</button>
											</motion.form>
										</div>
									</div>
								</div>
							</div>

							<div className='copyright-area'>
								<p>
									&copy; {new Date().getFullYear()} The Open View. All Rights Reserved by{' '}
									<a href='https://theopenview.com/' target='_blank'>
										The Open View
									</a>

								</p>
							</div>
						

					<div className='footer-image text-center'>
						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 5 }}
							transition={{ delay: 0.2 }}
							src='/images/footer-image1.png'
							alt='image'
						/>

					</div>
				</motion.footer>
      </>
	);
}

export default Footer1;
