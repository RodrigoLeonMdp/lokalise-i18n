import * as React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1>HOMEPAGE!!!</h1>
      <p>Key: {t("title")}</p>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
