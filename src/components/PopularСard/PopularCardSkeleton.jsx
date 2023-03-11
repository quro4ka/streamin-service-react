import ContentLoader from 'react-content-loader'

export const PopularCardLoader = (props) => (
  <ContentLoader
    width={305}
    height={500}
    // viewBox="0 0 700 300"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}>
    <rect x="50" y="141" rx="3" ry="3" width="250" height="35" />

    <rect x="50" y="210" rx="14" ry="14" width="100" height="32" />
    <rect x="170" y="210" rx="14" ry="14" width="100" height="32" />

    <rect x="50" y="280" rx="3" ry="3" width="120" height="10" />
    <rect x="50" y="300" rx="3" ry="3" width="200" height="8" />
    <rect x="50" y="320" rx="3" ry="3" width="200" height="8" />
    <rect x="50" y="340" rx="3" ry="3" width="120" height="10" />
    <rect x="50" y="360" rx="3" ry="3" width="200" height="8" />

    {/* <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
    <rect x="505" y="224" rx="14" ry="14" width="72" height="32" /> */}

    {/* <rect x="55" y="42" rx="16" ry="16" width="574" height="216" /> */}
  </ContentLoader>
)
