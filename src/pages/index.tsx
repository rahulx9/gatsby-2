import { PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head: React.FC = () => <title>Home Page</title>;

export default IndexPage;
