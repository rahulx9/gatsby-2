import React from "react";
import { graphql, useStaticQuery } from "gatsby";

type PropType = {
  title: string;
};

const Seo: React.FC<PropType> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
