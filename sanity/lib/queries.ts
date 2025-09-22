import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`
  *[_type == "arsenalPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
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
    mainImage,
    publishedAt,
    body,
    productDetails,
    gallery,
    "categories": categories[]->{
      title,
      slug
    },
    "author": author->{
      name,
      image,
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
    mainImage,
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