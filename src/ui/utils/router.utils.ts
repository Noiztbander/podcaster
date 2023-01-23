export const handleRouteChange = () => {
  const spinner = document.getElementById('header-loading-spinner');
  if (spinner) {
    spinner.style.display = 'inline-block';
  }
};

export const handleRouteComplete = () => {
  const spinner = document.getElementById('header-loading-spinner');
  if (spinner) {
    spinner.style.display = 'none';
  }
};
