import {ElementsFactories} from 'react-planner';

const info = {
  title: 'line',
  tag: ['line'],
  description: 'Line',
  image: require('./line.png'),
  visibility: {
    catalog: true,
    layerElementsVisible: true
  }
};

export default ElementsFactories.LineFactory('line', info);

