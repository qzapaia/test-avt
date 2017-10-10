export const getSize = () => {
  const w = window.innerWidth;

  return (w <= 375 && { size:0,  size_name:'s' }) ||
         (w <= 425 && { size:1,  size_name:'m' }) ||
         (w <= 990 && { size:2,  size_name:'l' }) ||
         (w <= 1280 && { size:3,  size_name:'xl' }) ||
         (w > 1280 && { size:4,  size_name:'xxl' })
         null;
}
