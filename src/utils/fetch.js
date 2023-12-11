const apiUrl = "https://dev-api.baitussalam.org:8450";

const API_URL = {
  HIJRI_DATE: {
    GET_BY_MONTH_YEAR: "/api/public/v1/hijri/month/from-gregorian",
  },
};

const fetchData = async ({ month, year }) => {
  const response = await fetch(
    `${apiUrl}${API_URL.HIJRI_DATE.GET_BY_MONTH_YEAR}?year=${year}&month=${month}`
  );
  const finalResponse = await response.json();
  return finalResponse;
};

export default fetchData;
