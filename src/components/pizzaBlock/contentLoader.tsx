import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="121" y="419" rx="30" ry="30" width="154" height="45" />
      <rect x="2" y="428" rx="0" ry="0" width="91" height="27" />
      <rect x="4" y="310" rx="0" ry="0" width="280" height="88" />
      <rect x="1" y="260" rx="0" ry="0" width="280" height="27" />
      <circle cx="140" cy="118" r="120" />
    </ContentLoader>)
}

export default Skeleton

