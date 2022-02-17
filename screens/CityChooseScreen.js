import GenericScreen from './GenericScreen'
import TextButton from '../components/TextButton';

const CityChooseScreen = ({navigation, route}) => {
  return (
    <GenericScreen titleText={route.params['countryName']}>
        {route.params["cities"].map((city) => <TextButton 
        pressFunc={() => navigation.navigate('Results', {"cityName":city.name, "population":city.population})}
         key={parseInt(Math.random() * 10000)} text={city.name}/>)}
    </GenericScreen>
  );
};

export default CityChooseScreen;