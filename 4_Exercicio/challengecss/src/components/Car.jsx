import PropTypes from 'prop-types';
import styles from './Car.module.css'

const Car = ({ car }) => {
  return (
    <div className={styles.card}>
      <h1>{car.name}</h1>
      <p>KM: {car.km}</p>
      <p>Cor: {car.color}</p>
    </div>
  )
}

Car.propTypes = {  // para validar os tipos de propriedades passadas para os componentes. 
    car: PropTypes.shape({
      name: PropTypes.string,
      km: PropTypes.number,
      color: PropTypes.string,
    }).isRequired,
  };

export default Car
