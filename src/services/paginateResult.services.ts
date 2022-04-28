import { NextFunction, Request, Response } from 'express';

interface INavLink {
  next_page: string;
  previous_page?: string;
}

const paginateResult = (req: Request, res: Response, next: NextFunction) => {
  const page: number = req.query.page ? parseInt(req.query.page as string, 10) : 0;
  const limit: number = req.query.limit ? parseInt(req.query.limit as string, 10) : 15;
  const name: string = req.query.name as string ?? '';

  req.paginate = {
    page,
    limit,
    name,
  };

  const queryNextPage = `?page=${page + 1}&limit=${limit}`;
  const queryPrevPage = `?page=${page - 1}&limit=${limit}`;
  const queryName = `&name=${name}`;
  const navigateLinks: INavLink = { next_page: `https://capstone-q4-nodejs.herokuapp.com${req.baseUrl}${queryNextPage}`};

  if (page > 0) {
    navigateLinks.previous_page = `https://capstone-q4-nodejs.herokuapp.com${req.baseUrl}${queryPrevPage}`;
  }

  if (queryName) {
    Object.entries(navigateLinks).forEach(([key, value]) => {
      navigateLinks[key] += queryName;
    });
  }
  req.navlinks = navigateLinks;
  return next();
};

export default paginateResult;
