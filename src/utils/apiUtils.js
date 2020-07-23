// only for axios err
export const getError = (err) => {
  return err?.response?.data?.message ?? err;
};
