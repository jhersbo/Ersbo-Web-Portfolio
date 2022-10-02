import LandingScreen from '../LandingScreen';
import renderer from 'react-test-renderer'

test('passes snapshot test', () => {
  const tree = renderer.create(<LandingScreen/>).toJSON()
  expect(tree).toMatchSnapshot()
});