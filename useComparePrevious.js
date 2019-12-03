/* eslint-disable no-console */
import usePrevious from './usePrevious';

const useComparePrevious = value => {
  const prev = usePrevious(value);

  if (prev !== value) {
    console.groupCollapsed('Previous value is diferent');
    console.log('Previous:');
    console.log(prev);
    console.log('Value:');
    console.log(value);
    console.groupEnd();
  }
};

export default useComparePrevious;
