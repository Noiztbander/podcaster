import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div id="header-loading-spinner" className={styles.loadingSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default LoadingSpinner;
