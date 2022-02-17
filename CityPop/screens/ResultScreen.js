import GenericScreen from './GenericScreen'
import Modal from '../components/Modal.js'

export default function ResultScreen({navigation, route}) {

  return (
    <GenericScreen titleText={(route.params["cityName"])}>
        <Modal number={route.params["population"]}></Modal>
    </GenericScreen>
  );
}
