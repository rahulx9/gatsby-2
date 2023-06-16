import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage: React.FC<PageProps> = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allFile.nodes.map(({ name }) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const Head: React.FC = () => <Seo title="Blog" />;

export default AboutPage;

export const query = graphql`
  query GetBlogs {
    allFile {
      nodes {
        name
      }
    }
  }
`;
