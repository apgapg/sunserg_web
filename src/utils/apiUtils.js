// only for axios err
export const getError = (err) => {
  return err?.response?.data?.error?.message ?? err;
};
