import { Toaster as ReactHotToast, ToasterProps } from 'react-hot-toast';
import styles from '../assets/sass/toast.module.scss';

const toasterOptions: ToasterProps = {
  position: 'top-center',
  reverseOrder: false,
  gutter: 8,
  containerClassName: '',
  containerStyle: { margin: '8px' },
  toastOptions: {
    // Define default options
    className: styles.toastDefault,
    duration: 5000,
    // Default options for specific types
    success: {
      duration: 3000,
      iconTheme: {
        primary: 'green',
        secondary: 'white',
      },
    },
    error: {
      duration: 5000,
    },
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
