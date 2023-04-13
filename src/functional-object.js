class ExtensibleFunction extends Function {
  constructor(func) {
    if(!(func instanceof Function)){
      throw Error('The argument is not a function!')
    }
    return Object.setPrototypeOf(func, new.target.prototype);
  }
}

export class FunctionalObject extends ExtensibleFunction {
  constructor(func = (...callArgs) => { this.callArgs = callArgs; return this; }) { // arrow function, no prototype object created
    super(func); 
  }
  get content() {
    return { callArgs: this.callArgs };
  }
}

export const makeClassProxy = (classArg, classHandler = {
  apply(targetClass, thisArg, instanceCreationArgs) {
    return new Proxy(new targetClass(...instanceCreationArgs), {
      apply(targetInstance, thisArg, instanceCallingArgs) {
        return targetInstance(...instanceCallingArgs);
      }
    });
  }
}) => new Proxy(classArg, classHandler);
