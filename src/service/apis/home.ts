import cardImg1 from '@/assets/home-section-img1.jpeg'
import cardImg2 from '@/assets/home-section-img2.jpeg'
import cardImg3 from '@/assets/home-section-img3.jpeg'

const mockData = [
  {
    coverUrl: cardImg1,
    title: 'Title1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
  },
  {
    coverUrl: cardImg2,
    title: 'Title2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim '
  },
  {
    coverUrl: cardImg3,
    title: 'Title3',
    content: 'bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
  }
]
export const getHomeCardsInfo = () => {
  return Promise.resolve<CardConfig[]>(mockData)
}