import styles from './_Fallback.module.scss';

function Fallback(): JSX.Element {
  return (
    <div className={`${styles.fallback} fallback-fade-in`}>
      <div className={styles.fallback__bars}>
        <div className={styles.fallback__bars__bar} />
        <div className={styles.fallback__bars__bar} />
        <div className={styles.fallback__bars__bar} />
        <div className={styles.fallback__bars__bar} />
        <div className={styles.fallback__bars__bar} />
      </div>
      <p className={styles.fallback__loading}>Loading</p>
    </div>
  );
}

export default Fallback;

// NOTE:  Process works. Not ideal - wait for official react/router update; can't access Suspense API for unMount.
// https://stackoverflow.com/a/61598220/20274651

// import { useEffect, useRef } from 'react';
// import styles from './_Fallback.module.scss';

// type ElemProps = {
//   hasImportFinished: boolean;
//   enableComponent: () => void;
// };

// const Fallback = ({ hasImportFinished, enableComponent }: ElemProps) => {
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const { current } = ref;
//     function handleAnimationEnd(ev: AnimationEvent) {
//       // animationName is the keyframe name
//       if (ev.animationName === 'fadeout') {
//         enableComponent();
//       }
//     }

//     current?.addEventListener('animationend', handleAnimationEnd);
//     return () => {
//       current?.removeEventListener('animationend', handleAnimationEnd);
//     };
//   }, [enableComponent]);

//   return (
//     <div
//       className={`${styles.fallback} ${
//         hasImportFinished ? 'fallback-fade-out' : 'fallback-fade-in'
//       }`}
//       ref={ref}>
//       <div className={styles.fallback__bars}>
//         <div className={styles.fallback__bars__bar} />
//         <div className={styles.fallback__bars__bar} />
//         <div className={styles.fallback__bars__bar} />
//         <div className={styles.fallback__bars__bar} />
//         <div className={styles.fallback__bars__bar} />
//       </div>
//       <p className={styles.fallback__loading}>Loading</p>
//     </div>
//   );
// };

// export default Fallback;
