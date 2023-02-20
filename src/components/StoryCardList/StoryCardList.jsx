import { StoryCard } from '../StoryCard/StoryCard'
import { dataCards } from './dataCards'

export const StoryCardList = () => {
  return (
    <>
      {dataCards.map((data, index) => (
        <StoryCard key={index} index={index} {...data} />
      ))}
    </>
  )
}
