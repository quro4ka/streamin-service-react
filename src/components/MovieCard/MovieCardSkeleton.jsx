import ContentLoader from 'react-content-loader'

export const CardLoader = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={400}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="11" y="12" rx="12" ry="12" width="200" height="300" />
  </ContentLoader>
)
