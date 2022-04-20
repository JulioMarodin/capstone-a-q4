const titlelizer = (str) => {
  const arrayTitle = str.split(' ');

  arrayTitle.forEach((element, index) => {
    const fstLetter = element[0].toUpperCase();
    const res = element.replace(element[0], fstLetter);
    arrayTitle.splice(index, 1, res);
  });
 return arrayTitle.join(' ');
};

export default titlelizer;
