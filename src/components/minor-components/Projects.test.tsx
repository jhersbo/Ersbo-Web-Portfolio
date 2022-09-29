import Projects from './Projects';
import renderer from 'react-test-renderer'

test('passes snapshot test', () => {
  const tree = renderer.create(<Projects/>).toJSON()
  expect(tree).toMatchSnapshot()
});