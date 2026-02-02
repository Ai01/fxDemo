export const runExpression = (expressionStr, context) => {
  try {
    // 构造函数的最后一个参数是函数体，前面的参数是函数形参
    const fn = new Function("ctx", `with (ctx) { return ${expressionStr}; }`);
    return fn(context);
  } catch (error) {
    console.error("代码执行出错：", error);
  }
};

// test case
// console.log(runExpression("1 + 2", {}));
