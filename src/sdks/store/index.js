import { makeAutoObservable, observable } from "mobx";

export default class SchemaStore {
  _schema = [];

  constructor(schema) {
    makeAutoObservable(this, {
        _schema: observable,
    });
    this._schema = schema;
  }

  getValue = (key) => {
    console.log(key, this._schema);
    if (this._schema && this._schema.length > 0) {
      const item = this._schema.find((item) => item.key === key);
      return item ? item.componentProps?.value : undefined;
    }
    return undefined;
  }
}
