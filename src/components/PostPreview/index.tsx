import React from 'react'
import { PostPreview$, Image$, Tags$, Title$ } from './styles'

interface PostPreviewPropsI {
  tags?: string[],
  imageSrc?: string,
  imageSrcSet?: string,
  title: string,
  url: string
}

const PostPreview: React.FunctionComponent<PostPreviewPropsI> = ({
  tags, imageSrc, imageSrcSet, title, url
}) => {
  return (
    <PostPreview$>
      {(imageSrc || imageSrcSet) && (
        <Image$>
          <img srcSet={imageSrcSet} src={imageSrc} alt={title} />  
        </Image$>
      )}

      <div>
        {tags && <Tags$>{tags.join(', ')}</Tags$>}

        <Title$>
          <a href={url}>{title}</a>
        </Title$>
      </div>
    </PostPreview$>
  )
}

export default PostPreview