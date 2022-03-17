import Head from "next/head";
import Container from "react-bootstrap/Container";
import NavbarMenu from "./NavbarMenu";

const Layout = ({ children, title, description }) => (
  <Container>
    <Head>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description || "next app"} />
      <meta name="author" content="next app" />
      <meta name="keywords" content="next app" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="notranslate" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || "next app"} />
      <meta property="og:url" content="https://next-app.now.sh/" />
      <meta property="og:site_name" content="next app" />
      <meta
        property="og:image"
        content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthoc.xyz%2Fnextjs-la-gi-tai-sao-phai-su-dung-nextjs%2F&psig=AOvVaw1LJmzGvAzLDG5Zm1VlNX3f&ust=1647568309891000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCMCy57CEzPYCFQAAAAAdAAAAABAI"
      />
    </Head>

    <header>
      <NavbarMenu />
    </header>

    <main>{children}</main>
  </Container>
);

export default Layout;
