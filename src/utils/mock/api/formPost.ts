// this is supposed to mock a response back from the server
// for now not doing anything
export const formPost = (): Promise<string> => {
  return new Promise((resolve) => {
    resolve("heh");
  });
};
