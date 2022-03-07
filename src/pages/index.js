import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import "../styles/bootstrap-override.scss"
import { MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { pageTestimonials, testimonialsWrapper, content, textBold } from "../styles/pages/homepage.module.scss"
import Seo from "../components/seo"
import TestimonialItem from "../components/testimonial"
import CallToAction from "../components/cta"

const IndexPage = ({ data }) => {
	const { 
		pageHeading,
		pageButtonLabel,
		pageButtonLink,
		pageContent,
		pageImage,
		testimonials
	} = data.contentfulLandingPage;

	const image = getImage(pageImage)

	const imgAlt = pageImage.description

	const headingOptions = {
		renderMark: {
		  [MARKS.BOLD]: (text) => <span className={textBold}>{text}</span>,
		}
	}

	const contentOptions = {
		renderMark: {
		  [MARKS.BOLD]: (text) => <strong>{text}</strong>,
		}
	}

	return (
		<>
			<Seo />
			<main>
				<section className="page-section">
					<Container fluid="md">
						<Row className="justify-content-center">
							<Col lg={7} md={9} sm={11} xs={12}>
								<div className="text-center mb-5">
									{renderRichText(pageHeading, headingOptions)}
								</div>
							</Col>
						</Row>
						<Row className="align-items-center justify-content-center">
							<Col md={{ span: 4, order: 'first' }} sm={11} xs={{ span: 12, order: 'last' }}>
								<div className={content}>
									{renderRichText(pageContent, contentOptions)}
								</div>
								
								{pageButtonLabel && pageButtonLink && 
									<Button href={pageButtonLink} variant="outline-secondary" className="mt-2" type="button">
										{pageButtonLabel}
										<span className="ml-2"><FontAwesomeIcon icon={faChevronRight} size="sm" /></span>
									</Button>
								}
							</Col>
							<Col md={{ span: 8, order: 'last' }} xs={{ span: 12, order: 'first' }}>
								<GatsbyImage className="mb-5 mb-md-0 mt-3 mt-md-0" image={image} alt={imgAlt} />
							</Col>
						</Row>
					</Container>
				</section>
				<section className={pageTestimonials}>
					<Container fluid="md">
						<Row className="justify-content-center">
							<Col lg={12} sm={11}>
								<div className={testimonialsWrapper}>
									{testimonials.map((testimonial) => <TestimonialItem key={testimonial.id} item={testimonial} />)}
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<CallToAction />
			</main>
		</>
	)
}

export default IndexPage

IndexPage.propTypes = {
	pageHeading: PropTypes.object,
	pageContent: PropTypes.object,
	pageButtonLabel: PropTypes.string,
	pageButtonLink: PropTypes.string,
	pageImage: PropTypes.object,
	testimonials: PropTypes.object,
}

export const query = graphql`
	query {
		contentfulLandingPage {
			pageHeading {
				raw
			}
			pageContent {
				raw
			}
			pageButtonLabel
			pageButtonLink
			pageImage {
				description
				gatsbyImageData
			}
			testimonials {
				id
				ratings
				content {
					childMarkdownRemark {
					  html
					}
				}
				fullName
				avatar {
					description
					gatsbyImageData
				}
				jobCompany
			}
		}
	}
`

