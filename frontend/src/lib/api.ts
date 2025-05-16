const API_URL = import.meta.env.PUBLIC_STRAPI_API;

const headers = {
  'Authorization': `Bearer ${import.meta.env.PUBLIC_STRAPI_API_TOKEN}`
}

export async function fetchAllTILs() {
  const res = await fetch(`${API_URL}/api/tils?populate=*&filters[publishedAt][$notNull]=true&sort=createdAt:desc`, { headers });
  const json = await res.json();
  console.log(json.data[1])

  if (json.data) {
    return json.data;
  } else {
    return [];
  }
}

export async function fetchTILBySlug(slug: string) {
  const res = await fetch(`${API_URL}/api/tils?filters[slug][$eq]=${slug}&populate=*`, { headers });
  const json = await res.json();
  return json.data[0];
}