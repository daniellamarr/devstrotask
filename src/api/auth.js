import astroWorldServiceClient from '.';

export const signin = async (body) => {
  const response = await astroWorldServiceClient({
    url: '/auth/login',
    method: 'post',
    data: body,
  });

  return response;
};

export const signup = async (body) => {
  const response = await astroWorldServiceClient({
    url: '/auth/signup',
    method: 'post',
    data: body,
  });

  return response;
};
