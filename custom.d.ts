declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare type ContentfulPersonT = {
  contentfulPerson: {
    position?: string,
    name?: string,
    image?: {
      resolutions?: {
        srcSet?: string,
        src?: string
      }
    },
    shortBio?: {
      shortBio?: string
    },
    github?: string,
    email?: string,
    cv?: string,
    twitter?: string,
    instagram?: string
  }
}