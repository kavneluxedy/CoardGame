export default interface IFormError {
  error: boolean,
  result: [
    {
      errorFlag: string,
      errorMessage: string,
      result: string,
    }
  ]
}
