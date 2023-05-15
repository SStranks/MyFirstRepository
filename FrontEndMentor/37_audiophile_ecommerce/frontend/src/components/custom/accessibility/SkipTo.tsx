import styles from './_SkipTo.module.scss';

type ElemProps = {
  contentName: string;
  contentId: string;
};

// Accessibility; hidden by default, allows users to skip page content
function SkipTo(props: ElemProps): JSX.Element {
  const { contentName, contentId } = props;

  // NOTE:  React-Router can't handle #links. Manual focus on #HTMLElement.
  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(contentId) as HTMLElement;
    element?.setAttribute('tabIndex', '0');
    element?.focus();
    element?.removeAttribute('tabIndex');
  };

  return (
    <a className={styles.container} href={contentId} onClick={onClickHandler}>
      Skip to {contentName}
    </a>
  );
}

export default SkipTo;
