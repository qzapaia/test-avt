export const getSize = () => {
  const w = window.innerWidth;

  return (w <= 375 && { size:0,  size_name:'s' }) ||
         (w <= 425 && { size:1,  size_name:'m' }) ||
         (w <= 768 && { size:2,  size_name:'l' }) ||
         (w > 1024 && { size:3,  size_name:'xl' }) ||
         null;
}
