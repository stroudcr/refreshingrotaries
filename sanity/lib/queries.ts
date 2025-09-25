import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`
  *[_type == "arsenalPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    publishedAt,
    "categories": categories[]->title,
    "author": author->name
  }
`

export const POST_QUERY = groq`
  *[_type == "arsenalPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    publishedAt,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    },
    productDetails,
    gallery[] {
      asset->,
      alt,
      caption
    },
    "categories": categories[]->{
      title,
      slug
    },
    "author": author->{
      name,
      image {
        asset->,
        alt
      },
      bio
    }
  }
`

export const POSTS_BY_CATEGORY_QUERY = groq`
  *[_type == "arsenalPost" && references(*[_type=="category" && slug.current == $category]._id)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    publishedAt,
    "categories": categories[]->title,
    "author": author->name
  }
`

export const CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`