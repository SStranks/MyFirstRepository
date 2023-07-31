import { Toaster as ReactHotToast, ToasterProps } from 'react-hot-toast';
import styles from '../assets/sass/toast.module.scss';

const toasterOptions: ToasterProps = {
  position: 'top-center',
  reverseOrder: false,
  gutter: 8,
  containerClassName: '',
  containerStyle: { margin: '8px' },
  toastOptions: {
    // ------------------------------ //
    // ---- Default Toast options --- //
    // ------------------------------ //
    // id: '',
    // icon: '',
    duration: 5000,
    // ariaProps: {},
    className: styles.toastDefault,
    // style: {},
    // position: '',
    // iconTheme: {},
    // ------------------------------ //
    // ---- Success Toast Options --- //
    // ------------------------------ //
    success: {
      className: styles.toastSuccess,
      duration: 3000,
      iconTheme: {
        primary: 'green',
        secondary: 'white',
      },
    },
    // ------------------------------ //
    // ---- Error Toast Options ----- //
    // ------------------------------ //
    error: {
      duration: 5000,
    },
    // ------------------------------ //
    // ---- Loading Toast Options --- //
    // ------------------------------ //
    loading: {},
    // ------------------------------ //
    // ---- Blank Toast Options ----- //
    // ------------------------------ //
    blank: {},
    // ------------------------------ //
    // ---- Custom Toast Options ---- //
    // ------------------------------ //
    custom: {},
  },
};

export default function Toaster(): JSX.Element {
  return (
    <ReactHotToast
      position={toasterOptions.position}
      reverseOrder={toasterOptions.reverseOrder}
      gutter={toasterOptions.gutter}
      containerClassName={toasterOptions.containerClassName}
      containerStyle={toasterOptions.containerStyle}
      toastOptions={toasterOptions.toastOptions}
    />
  );
}
