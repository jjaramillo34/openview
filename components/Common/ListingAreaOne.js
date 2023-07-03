import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlipe } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const ListingAreaOne = ({ bgColor, listings }) => {
    return (
        <section className={`popular-places-area ${bgColor}`}>
            <div className="container">
                <div className="section-title">
                    <h2>Most Visited Listings</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Quis ipsum suspendisse ultrices
                        gravida. Risus commodo viverra.
                    </p>
                </div>

                <div className="row">
                    {listings && listings.map((list) => (
                        list.status === "active" && (
                            <div className="col-lg-4 col-md-6" key={list.id}>
                                <div className="single-places-box">
                                    <div className="image">
                                        <Swiper
                                            loop={true}
                                            navigation={true}
                                            modules={[Navigation, Pagination]}
                                            className="image-slides"
                                        >
                                            {list.gallery.length > 0 && list.gallery.map((gal, i) => (
                                                <SwiperSlipe key={i}>
                                                    <div className="single-image">
                                                        <img
                                                            src={gal.replace(
                                                                /^http:\/\//i,
                                                                "https://"
                                                            )}
                                                            alt="image"
                                                        />
                                                        <Link href={`/listing/${list.id}`}>
                                                            <a className="link-btn"></a>
                                                        </Link>
                                                    </div>
                                                </SwiperSlipe>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ListingAreaOne;
