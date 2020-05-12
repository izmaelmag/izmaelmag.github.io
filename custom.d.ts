declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare interface ContentfulPersonI {
  person: {
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

declare interface ContentfulAnimationPageI {
  page: {
    description: {
      content: [
        { content: [{ value: string }] }
      ]
    },
    slug: string,
    tags: string,
    title: string,
    updatedAt: string,
    preview: {
      resolutions: {
        src: string
      }
    }
  }
}

declare interface ContentfulAnimationPagesListI {
  pagesList: {
    pages: {
      node: {
        slug: string,
        tags: string,
        title: string,
        preview: {
          resolutions: {
            src: string
          }
        }
      }
    }[]
  }
}