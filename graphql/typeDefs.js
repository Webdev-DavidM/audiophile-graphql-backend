import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    getAllProducts: [Product!]
  }

  type Query {
    getAllProductsByCategory(category: String!): [Product!]
  }

  type Query {
    getProduct(slug: String!): ProductResponseObject!
  }

  type ProductResponseObject {
    code: Int!
    success: Boolean!
    product: Product
  }

  type Query {
    logIn(email: String!, password: String!): LoginResponseObject
  }

  type LoginResponseObject {
    code: Int!
    success: Boolean!
    message: String!
  }

  type Product {
    id: ID!
    stock: Int!
    slug: String!
    name: String!
    image: Image!
    category: String!
    categoryImage: CategoryImage!
    new: Boolean!
    price: Int!
    description: String!
    features: String!
    items: [Item!]
    gallery: [GalleryObject]
    others: [Other!]
    categorySummaryImages: CategoryImages
  }

  type CategoryImages {
    category: String!
    image: String!
  }

  type Image {
    mobile: String!
    tablet: String!
    desktop: String!
  }

  type CategoryImage {
    mobile: String!
    tablet: String!
    desktop: String!
  }

  type Item {
    quantity: Int!
    item: String!
  }

  type GalleryObject {
    first: GalleryItem
    second: GalleryItem
    third: GalleryItem
  }

  type GalleryItem {
    mobile: String!
    tablet: String!
    desktop: String!
  }

  type Other {
    slug: String!
    name: String!
    image: String!
  }
`;
