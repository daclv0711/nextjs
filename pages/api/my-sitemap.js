const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
    // An array with your links
    const links = [
        { url: "/posts", changefreq: "daily", priority: 0.7, lastmod: new Date() },
        { url: "/jokes/random", changefreq: "daily", priority: 0.7, lastmod: new Date() },
        { url: "/books", changefreq: "daily", priority: 0.7, lastmod: new Date() },
    ];

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
};