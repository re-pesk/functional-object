import { FunctionalObject, makeClassProxy } from "../src/functional-object.js";

class ContainerClass extends FunctionalObject {
  constructor(...instanceArgs) {
    super((...callArgs) => { this.callArgs = callArgs; return this; }); // arrow function, no prototype object created
    this.instanceArgs = instanceArgs;
  }
  get content() {
    return { instanceArgs: this.instanceArgs, callArgs: this.callArgs };
  }
}

const Container = makeClassProxy(ContainerClass);

const container = Container('a', 'b');
console.log('container: ', container);

console.log(`container('c', 'd').content: `, container('c', 'd').content);
console.log(`container: `, container);
console.log('container instanceof Container: ', container instanceof Container);
console.log('container instanceof ContainerClass: ', container instanceof ContainerClass);
console.log('container instanceof FunctionalObject: ', container instanceof FunctionalObject);
console.log('container instanceof Function: ', container instanceof Function);

console.log('container.content: ', container.content);
