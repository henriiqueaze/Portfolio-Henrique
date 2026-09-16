import { useEffect } from "react";

function setMetaAttribute(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!value) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

export function usePageMetadata({ title, description, path = "/", image, structuredData }) {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
    const canonicalUrl = siteUrl ? `${siteUrl}${path}` : null;
    const imageUrl = image && siteUrl ? new URL(image, `${siteUrl}/`).href : null;

    document.title = title;
    setMetaAttribute('meta[name="description"]', "content", description);
    setMetaAttribute('meta[property="og:title"]', "content", title);
    setMetaAttribute('meta[property="og:description"]', "content", description);
    setMetaAttribute('meta[property="og:type"]', "content", "website");
    setMetaAttribute('meta[property="og:url"]', "content", canonicalUrl);
    setMetaAttribute('meta[property="og:image"]', "content", imageUrl);
    setMetaAttribute('meta[name="twitter:card"]', "content", imageUrl ? "summary_large_image" : null);
    setMetaAttribute('meta[name="twitter:title"]', "content", title);
    setMetaAttribute('meta[name="twitter:description"]', "content", description);
    setMetaAttribute('meta[name="twitter:image"]', "content", imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    } else {
      canonical?.remove();
    }

    const scriptId = "page-structured-data";
    document.getElementById(scriptId)?.remove();
    if (structuredData) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [description, image, path, structuredData, title]);
}
