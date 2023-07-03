import React from "react";
import { FacebookShareButton, 
    TwitterShareButton, 
    EmailShareButton, 
    PinterestShareButton,
    FacebookMessengerShareButton,
    WhatsappShareButton,
    RedditShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, EmailIcon, PinterestIcon, FacebookMessengerIcon, WhatsappIcon, RedditIcon } from "react-share";

const SocialShare = ({ url, title }) => {
    return (
        <div className="social-share">
            <FacebookShareButton 
                url={url} 
                quote={title}
                tag="spot, travel, travel spot, travel blog, travel blogger, travel blog post"
                >
                <FacebookIcon size={32} round={false} style={{
                    marginRight: "10px"
                }}/>
            </FacebookShareButton>
            <TwitterShareButton 
                url={url} 
                title={title}>
                <TwitterIcon size={32} round={false} 
                style={{
                    marginRight: "10px"
                }}
                />
            </TwitterShareButton>
            <EmailShareButton
                url={url}
                subject={title}
                // multi line strings work as well
                body={
                `How to start learning web development?
                \r- Learn HTML
                \r- Learn CSS
                \r- Learn JavaScript
                \rUse freeCodeCamp to learn all the above and much, much more !
                https://www.freecodecamp.org/learn`}
                divider=":: "
                separator=":: "
                className="Demo__some-network__share-button">
                <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <PinterestShareButton
                url={url}
                media=""
                className="Demo__some-network__share-button">
                <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
            <FacebookMessengerShareButton
                url={url}
                appId="521270401588372"
                className="Demo__some-network__share-button">
                <FacebookMessengerIcon size={32} round={true} />
            </FacebookMessengerShareButton>
            <WhatsappShareButton
                url={url}
                title={title}
                separator=":: "
                className="Demo__some-network__share-button">
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <RedditShareButton
                url={url}
                title={title}
                windowWidth={660}
                windowHeight={460}
                className="Demo__some-network__share-button">
                <RedditIcon size={32} round={true} />
            </RedditShareButton>


        </div>
    );
    }

export default SocialShare;