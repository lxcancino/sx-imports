export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    const msg = `${moduleName} has already been loaded. Import ${moduleName} module in the AppModule only.`;
    throw new Error(msg);
  }
}
