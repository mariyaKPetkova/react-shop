import App from './App';
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@zarconontol/enzyme-adapter-react-18';


Enzyme.configure({ adapter: new Adapter() })

describe('App Component', () => {

  it('App component existing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBe(true)
  })

  it('App data-test existing', () => {
    const wrapper = shallow(<App />)
    const appComponent = wrapper.find("[data-test='app-component']")
    expect(appComponent.length).toBe(1)
  })

})