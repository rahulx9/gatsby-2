import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage: React.FC<PageProps> = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const Head: React.FC = () => <Seo title="Blog" />;

export default AboutPage;

export const query = graphql`
  query GetBlog {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;
