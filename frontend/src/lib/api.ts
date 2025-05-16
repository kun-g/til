const API_URL = import.meta.env.PUBLIC_STRAPI_API;

export async function fetchAllTILs() {
  const res = await fetch(`${API_URL}/api/tils?populate=*&filters[publishedAt][$notNull]=true`);
  console.log(`${API_URL}/api/tilss?populate=*&filters[publishedAt][$notNull]=true`)
  const json = await res.json();
  if (json.data) {
    return json.data;
  } else {
    return [];
  }
}

export async function fetchTILBySlug(slug: string) {
  const res = await fetch(`${API_URL}/api/tils?filters[slug][$eq]=${slug}&populate=*`);
  const json = await res.json();
  return json.data[0];
}
