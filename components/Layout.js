import Head from "next/head";
import Container from "react-bootstrap/Container";
import NavbarMenu from "./NavbarMenu";
import Script from "next/script";

const Layout = ({ children, title, description }) => (
  <Container>
    <Head>
      <link rel="dns-prefetch" href="//nextjs-daclv0711.vercel.app" />
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="canonical" href="https://nextjs-daclv0711.vercel.app" />
      <meta
        name="description"
        content={
          description +
          " NextJS là một framework được xây dựng dựa trên React. Next.Js hỗ trợ server-side rendered mà không cần phải cấu hình gì ..."
        }
      />
      <meta
        name="google-site-verification"
        content="pvynuxfTyiTfxz0Qu46PjDCERwVmN2JQ34hDmb5ZqPo"
      />
      <meta name="msvalidate.01" content="5AB1A83F4E22EC64DB6344BF44CB6BF4" />
      <Script async src="https://www.google-analytics.com/analytics.js" />
      <meta name="keywords" content="next app, nexts asaasba" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={
          "NextJS là một framework được xây dựng dựa trên React. Next.Js hỗ trợ server-side rendered mà không cần phải cấu hình gì ..."
        }
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nextjs-daclv0711.vercel.app" />
      <meta
        property="og:site_name"
        content="https://nextjs-daclv0711.vercel.app"
      />
      <meta
        property="og:image"
        content="https://thoc.xyz/wp-content/uploads/2021/11/1_Hva7hcsFWulFUPhrEWui1A.jpeg"
      />
    </Head>

    <header>
      <NavbarMenu />
    </header>

    <main>{children}</main>
  </Container>
);

export default Layout;
