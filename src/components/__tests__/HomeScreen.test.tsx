import HomeScreen from './HomeScreen'
import renderer from 'react-test-renderer'

test('passes snapshot test', () => {
  const tree = renderer.create(<HomeScreen/>).toJSON()
  expect(tree).toMatchSnapshot()
});