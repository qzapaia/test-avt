export const getSize = () => {
  const w = window.innerWidth;

  return (w <= 375 && 's') ||
         (w <= 425 && 'm') ||
         (w <= 768 && 'l') ||
         (w > 1024 && 'xl') ||
         null;
}
