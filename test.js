/**
 * Function to perform some operation that may succeed or fail
 * @param {boolean} shouldSucceed - Flag indicating whether the operation should succeed or fail
 * @returns {Object} - An object containing either a result or an error
 */
function performOperation(shouldSucceed) {
  if (shouldSucceed) {
    return {
      result: "Operation successful!",
    };
  } else {
    return {
      error: new Error("Operation failed."),
    };
  }
}

/**
   * Function to handle the result or error from p
  /**
   * Function to handle the result or error from performOperation
   * @param {Object} operationResult - The object returned by performOperation
   */
function handleOperationResult(operationResult) {
  if (operationResult.error) {
    // Handle the error case
    console.error("Error:", operationResult.error.message);
  } else {
    // Handle the success case
    console.log("Result:", operationResult.result);
  }
}
