const paginate = (list: Array<any>, page: any = 1, perPage: any = 10) => {
  const nPage = parseInt(page, 10);
  const nPerPage = parseInt(perPage, 10);
  const len = list.length;
  if (len % nPerPage === 0 && nPage === len / nPerPage) {
    return {
      authors: list.slice((nPage - 1) * nPerPage, nPerPage * nPage),
    };
  }
  if (len % nPerPage !== 0 && nPage === parseInt(`${len / nPerPage}`, 10) + 1) {
    return {
      authors: list.slice((nPage - 1) * nPerPage, nPerPage * nPage),
    };
  }
  return {
    authors: list.slice((nPage - 1) * nPerPage, nPerPage * nPage),
    next_page: `https://capstone-q4-nodejs.herokuapp.com/api/users?page=${page + 1}&per_page=${perPage + 1}`,
    previous_page: `https://capstone-q4-nodejs.herokuapp.com/api/users?page=${page - 1}&per_page=${perPage - 1}`,
  };
};

export default paginate;
