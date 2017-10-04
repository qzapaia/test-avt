export const actionsByAction = config => store => next => action => {
  const handler = config[action.type];
  handler && handler(action);
  return next(action);
}
