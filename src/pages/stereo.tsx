import React, { useState } from 'react'
import styled from 'styled-components'
import CommonLayout from 'layouts/Common'
import Title from 'components/Title'

const Stereo = () => {
  const [imageData, setImageData] = useState<string | ArrayBuffer>('')
  const [offset, setOffset] = useState(1)
  const reader = new FileReader();


  const onImageChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files[0]
    reader.readAsDataURL(file);
    reader.onload = function () {  
      setImageData(reader.result)
      console.log(reader.result)
    }; 
  }

  const onOffsetChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const offset = Number(event.currentTarget.value)
    console.log(offset)
    setOffset(offset)
  }

  return (
    <CommonLayout>
      <Title>Check Stereo</Title>

      <Images$>
        <img src={imageData.toString()} />
        <Image$ theme={{ offset, image: imageData.toString() }} />  
      </Images$>

      <input type="file" onChange={onImageChange}/>

      <input type="range" onChange={onOffsetChange} min={1} value={offset} max={420} />
    </CommonLayout>
  )
}

export default Stereo

const Images$ = styled.div`
  width: 480px;
  height: auto;
  position: relative;

  img {
    display: block;
    width: 100%;
    opacity: 0;
  }
`

type StyledProps = {
  theme: {
    image: string,
    offset: number
  }
}

const Image$ = styled.div`
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${({ theme }: StyledProps) => theme.image}) no-repeat left top, url(${({ theme }: StyledProps) => theme.image}) no-repeat ${({ theme }: StyledProps) => theme.offset || 1}px top;
  background-size: 100%;
  will-change: background;
  transform: translate3d(0);
  background-blend-mode: difference;
`