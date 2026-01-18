import { Helmet } from "react-helmet";

export default function SEO() {
  return (
    <>
      <Helmet>
        <title>Abdullah Alam - Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Full-stack developer specializing in building frontend applications. View my projects and experience."
        />
        <meta
          name="keywords"
          content="react developer, web developer, full stack developer, portfolio, frontend developer, backend developer"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Abdullah Alam - Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Full-stack developer portfolio"
        />
        <meta
          property="og:image"
          content="https://portfolio-123-lemon.vercel.app/preview.jpg"
        />
        <meta
          property="og:url"
          content="https://portfolio-123-lemon.vercel.app/"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://portfolio-123-lemon.vercel.app/" />
      </Helmet>

      {/* Your content */}
    </>
  );
}
