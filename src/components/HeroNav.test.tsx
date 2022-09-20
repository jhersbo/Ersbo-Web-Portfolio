import HeroNav from "./HeroNav";
import renderer from 'react-test-renderer'

test('passes snapshot test', () => {
  const tree = renderer.create(<HeroNav/>).toJSON()
  expect(tree).toMatchSnapshot()
});