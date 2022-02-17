import TextButton from '../components/TextButton.js';
import GenericScreen from './GenericScreen'

export default function HomeScreen({navigation}) {

  return (
    <GenericScreen titleText="CityPop">
      <TextButton text="Search by city" pressFunc={() => navigation.navigate('CitySearch')}></TextButton>
      <TextButton text="Search by Country" pressFunc={() => navigation.navigate('CountrySearch')}></TextButton>
    </GenericScreen>
  );
}
