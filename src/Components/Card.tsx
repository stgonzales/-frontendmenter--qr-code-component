import { ReactNode } from "react"

interface Card {
  children: ReactNode
}

interface CardComposition {
  Image: typeof CardImage
  Content: typeof CardContent
}

export const Card: React.FC<Card> & CardComposition = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  )
}

export const CardImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <img {...props}/>
}

interface CardContent {
  children: ReactNode
}

export const CardContent: React.FC<CardContent> & React.HTMLAttributes<HTMLDivElement> = ({children}: CardContent) => {
  return (
    <div className='card-content'>
        {children}
      </div>
  )
}

Card.Image = CardImage
Card.Content = CardContent
