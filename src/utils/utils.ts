const get = (url: string | null) => {
  const urlSearchParams = new URLSearchParams(url?.split('?')[1]);
  return Object.fromEntries(urlSearchParams.entries());
}

export const Params = {
  get,
}