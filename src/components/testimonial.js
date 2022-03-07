import * as React from "react"
// import { Col } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { testimonialCol, testimonialItem, content, profile, image, profileRate } from "../styles/components/testimonial.module.scss"


const TestimonialItem = ({ item }) => {
    const {
        avatar,
        fullName,
        jobCompany,
        ratings
    } = item;

    const quote = item.content.childMarkdownRemark.html;

    const avatarImg = getImage(avatar);


    return(
        <div className={`my-3 my-mb-0 ${testimonialCol}`}>
            <div className={testimonialItem}>
                {ratings && <div className={`mb-4 ${profileRate}`}>
                    {[...Array(ratings)].map((rating, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="mr-1" size="sm" />
                    ))}    
                </div>}
                
                {quote && <div className={content} dangerouslySetInnerHTML={{
                    __html: quote
                }} />}

                <div className={profile}>
                    <div className={image}>
                        <GatsbyImage image={avatarImg} src={avatarImg} alt={fullName} />
                    </div>
                    <div className="info">
                        {fullName && <p className="h6 mb-1">{fullName}</p>}
                        {jobCompany && <p className="h6 text-normal mb-0">{jobCompany}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem
