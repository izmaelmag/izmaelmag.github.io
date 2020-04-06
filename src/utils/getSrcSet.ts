const getSrcSet = (...images: string[]) => {
  return images.reduce((acc, current, index) => {
    return `${acc} ${current} ${index+1}x,`
  }, '').trim().slice(0, -1)
}

export default getSrcSet