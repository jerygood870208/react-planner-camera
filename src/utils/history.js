import { Map } from 'immutable';
import diff from 'immutablediff';
import patch from 'immutablepatch';

export const historyPush = (historyStructure, item) => {
  if (historyStructure.last) {
    if (historyStructure.last.hashCode() !== item.hashCode()) {
      let toPush = new Map({
        time: Date.now(),
        diff: diff(historyStructure.last, item)
      });

      historyStructure = historyStructure
        .set('last', item)
        .set('list', historyStructure.list.push(toPush));
    }
  }
  else {
    historyStructure = historyStructure.set('last', item);
  }
  return historyStructure;
};

export const historyPop = (historyStructure) => {
  if (historyStructure.last) {
    console.log("historyStructure: ")
    console.log(historyStructure)
    if (historyStructure.list.size) {
      console.log("historyStructure.list.size: ")
      console.log(historyStructure.list.size)
      let last = historyStructure.first;
      console.log("last before for: ")
      console.log(last)
      for (let x = 0; x < historyStructure.list.size - 1; x++) {
        last = patch(last, historyStructure.list.get(x).get('diff'));
      }
      console.log("last after for: ")
      console.log(last)

      historyStructure = historyStructure
        .set('last', last)
        .set('list', historyStructure.list.pop());
    }
  }
  return historyStructure;
};

export const redoPush = (historyStructure, item) => {
  if (historyStructure.last) {
    if (historyStructure.last.hashCode() !== item.hashCode()) {
      let toPush = new Map({
        time: Date.now(),
        diff: diff(historyStructure.last, item)
      });

      historyStructure = historyStructure
        .set('last', item)
        .set('future', historyStructure.future.push(toPush));
    }
  }
  else {
    historyStructure = historyStructure.set('last', item);
  }
  return historyStructure;
};

export const redoPop = (historyStructure) => {
  if (historyStructure.last) {
    console.log("historyStructure: ")
    console.log(historyStructure)
    if (historyStructure.future.size) {
      console.log("historyStructure.future.size: ")
      console.log(historyStructure.future.size)
      let last = historyStructure.first;
      console.log("last before for: ")
      console.log(last)
      for (let x = 0; x < historyStructure.future.size - 1; x++) {
        last = patch(last, historyStructure.future.get(x).get('diff'));
      }
      console.log("last after for: ")
      console.log(last)

      historyStructure = historyStructure
        .set('last', last)
        .set('future', historyStructure.future.pop());
    }
  }
  return historyStructure;
};
