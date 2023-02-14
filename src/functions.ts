
const addNumbers = (a: number, b: number ) => a + b;

const promiseFunction = (): Promise<string> => Promise.resolve('re-solved')

export type emptyFunctionType = ()=> void;

const functionWithCallback = (cb: emptyFunctionType): emptyFunctionType => {
    return () => {}
}

export default  addNumbers;



