// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails, key} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <div className="bg">
      <li className={className}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="image">
            <img src={imgUrl} alt={title} />
          </div>
        </div>
      </li>
    </div>
  )
}
export default CardItem
