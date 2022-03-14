import { gql } from 'apollo-server';

export const typeDefs = gql`
  "Gets all the products"
  type Query {
    getAllProducts: [Product!]
  }

  "This will return all the products in a particular category based on the URL slug"
  type Query {
    getAllProductsByCategory(category: String!): [Product!]
  }

  "Get one product based on the URL slug"
  type Query {
    getProduct(slug: String!): ProductResponseObject!
  }

  "This will log a user in"
  type Query {
    logIn(email: String!, password: String!): LoginResponseObject
  }

  "This will sign a user up"
  type Mutation {
    signUp(email: String!, password: String!): SignUpResponseObject
  }

  "Everything below here will define what will be sent back to the client"
  type ProductResponseObject {
    code: Int!
    success: Boolean!
    product: Product
  }

  type SignUpResponseObject {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }

  type User {
    email: String!
    password: String!
    id: ID!
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
