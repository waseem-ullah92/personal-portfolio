import Head from "next/head";

interface SeoProps {
  title?: string;
}

export function Seo(props: SeoProps): JSX.Element {
  const { title } = props;

  const fullTitle = title
    ? `${title} | Waseem Dev Portfolio`
    : "Waseem Dev Portfolio";

  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  );
}
