import './styles.scss';

const SeasonCard = ({ season }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img/>
        <div className="card-title">
          <p>{season.year}</p>
        </div>
      </div>
    </div>
  )
}

export default SeasonCard;
