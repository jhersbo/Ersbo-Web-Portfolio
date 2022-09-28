import About from './About'
import renderer from 'react-test-renderer'

test('passes snapshot test', () => {
  const tree = renderer.create(<About/>).toJSON()
  expect(tree).toMatchSnapshot()
});