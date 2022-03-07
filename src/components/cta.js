import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { ctaWrapper, ctaContent } from "../styles/components/cta.module.scss"

export default function CallToAction() {
    const data = useStaticQuery(graphql`
        query {
            contentfulLandingPage {
                callToActionContent {
                    raw
                }
                callToActionButtonLabel
                callToActionButtonLink
            }
        }
    `);

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <p className="mb-0">{children}</p>
            },
            [BLOCKS.HEADING_2]: (node, children) => {
                return <h2>{children}</h2>
            }
        }
    }

    const {
        callToActionContent,
        callToActionButtonLabel,
        callToActionButtonLink
    } = data.contentfulLandingPage;

    return(
        <section className="page-call-to-action pt-5">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12} sm={11}>
                        <Row className={`no-gutters justify-content-center justify-content-md-between align-items-center py-5 px-4 px-lg-5 ${ctaWrapper}`}>
                            <Col md={9} className={`text-center text-md-left ${ctaContent}`}>
                                {renderRichText(callToActionContent, options)}
                            </Col>
                            <Col md={3} sm={5} xs={12} className="text-md-right text-center">
                                <Button className="mt-4 mt-md-0 px-5 px-md-4" href={callToActionButtonLink} variant="secondary">
                                    {callToActionButtonLabel}
                                    <span className="ml-2"><FontAwesomeIcon icon={faChevronRight} size="sm" /></span>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
