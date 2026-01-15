const mocksSchema = [
  {
    componentName: "A",
    componentProps: {
      name: "a-mock-name",
    },
  },
  {
    componentName: "B",
    componentProps: {
      name: "b-mock-name",
      message: {
        type: "expression",
        expression: "1 + 2"
      }
    },
  },
  {
    componentName: "A",
    componentProps: {
      name: "a-mock-name",
    },
  },
  {
    componentName: "B",
    componentProps: {
      name: "b-mock-name",
    },
  },
];

export default mocksSchema;
