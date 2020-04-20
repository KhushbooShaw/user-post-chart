export default () => (next: (arg0: any) => void) => (action: { type: string; payload: any; meta: any; }) => {
    if (process.env.NODE_ENV !== 'production') {
      const { type, payload, meta }: { type: string; payload: any, meta: any } = action;
  
      // tslint:disable-next-line
      console.groupCollapsed(type);
      // tslint:disable-next-line
      console.log('action:', JSON.stringify(action, null, 2));
      // tslint:disable-next-line
      console.groupEnd();
    }
  
    return next(action);
  };