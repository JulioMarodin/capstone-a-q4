const makeTitle = (title: string): string | void => {
  const newTitle = title.split(' ').map((item) => {
    const upper = item[0].toLocaleUpperCase();
    const capitalize = item.replace(item[0], upper);
    return capitalize;
  });
  return newTitle.join(' ');
};

export default makeTitle;
