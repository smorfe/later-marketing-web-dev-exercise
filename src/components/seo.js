import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


const Seo = () => {
    const { site } = useStaticQuery(query)

    const {
        title,
        description,
        siteUrl,
    } = site.siteMetadata

    return(
        <Helmet title={title}>
            <meta name="description" content={description} />
            {siteUrl && <meta property="og:url" content={siteUrl} />}
        </Helmet>
    )
}

export default Seo

Seo.propTypes = {
    title: PropTypes.string,
    siteUrl: PropTypes.string,
    description: PropTypes.string,
}

Seo.defaultProps = {
    title: null,
    siteUrl: null,
    description: null,
}

export const query = graphql`
	query {
		site {
            siteMetadata {
                title
                siteUrl
                description
            }
        }
	}
`
