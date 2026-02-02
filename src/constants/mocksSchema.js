const mocksSchema = [
  {
    componentName: "A",
    key: 'a1',
    componentProps: {
      name: "a-mock-name",
      value: 1,
    },
  },
  {
    componentName: "B",
    key: 'b1',
    componentProps: {
      name: "b-mock-name",
      message: {
        type: "expression",
        expression: "(() => {var a = getValue('a1') + getValue('b1'); console.log(a, getValue('a1')); return a;})(); "
      },
      value: 2 
    },
  },
  {
    componentName: "A",
    key: 'a2',
    componentProps: {
      name: "a2-mock-name",
    },
  },
  {
    componentName: "B",
    key: 'b2',
    componentProps: {
      name: "b2-mock-name",
    },
  },
];

export default mocksSchema;
