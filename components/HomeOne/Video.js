import React from "react";
import { motion } from "framer-motion";


const Video = ({ user, listings }) => {

    const line1 = "'The OverView of New York City best RoofTops";
    const line2 = "New York City most beautiful places in on place'";

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
    
    return (
        <>
            <div className="video-area ptb-50">
                <motion.video
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    autoPlay
                    loop
                    muted
                    style={{ 
                        width: "100%",
                        margin: "0 auto",
                        display: "block",
                    }}
                >
                    <source src="/images/video.mp4" type="video/mp4" />
                </motion.video>
                
                <div className="video-text">
                    
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        src="/images/building.svg"
                        alt="image"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "20%",
                            transform: "translate(-50%, -50%)",
                            width: "120px",
                            
                        }}
                    />
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            width: "3px",
                            height: "100px",
                            backgroundColor: "lightblue",
                            position: "absolute",
                            top: "50%",
                            left: "24%",
                            bottom: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    ></motion.div>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ 
                            color: "#fff",
                            fontSize: "50px",
                            fontWeight: "700",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        The OverView of New York City best RoofTops
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        variants={sentence}
                        style={{
                            color: "#fff",
                            fontSize: "18px",
                            position: "absolute",
                            top: "65%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        {line1.split("").map((char, index) => {
                            return (
                                <motion.span
                                    key={char + "-" + index}
                                    variants={letter}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                        <br />
                        {line2.split("").map((char, index) => {
                            return (
                                <motion.span
                                    key={char + "-" + index}
                                    variants={letter}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </motion.p>

                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        href="#"
                        className="default-btn"
                        style={{
                            position: "absolute",
                            top: "75%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <i className="flaticon-user"></i> Join Now <span></span>
                    </motion.a>
                </div>

            </div>
        </>
    );
};

export default Video;

