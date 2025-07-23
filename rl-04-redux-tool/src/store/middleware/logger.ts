import type { Middleware } from '@reduxjs/toolkit';

const logger: Middleware = (store) => (next) => (action) => {
  const typedAction = action as { type: string };
  console.group(`Action: ${typedAction.type}`);
  console.log('Previous State:', store.getState());
  console.log('Action:', action);
  
  const result = next(action);
  
  console.log('Next State:', store.getState());
  console.groupEnd();
  
  return result;
};

export default logger;
