const GetAge = birthdate => {
  const birth = new Date(birthdate);
  const diff = Date.now() - birth.getTime();
  const age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
};

export default GetAge;
