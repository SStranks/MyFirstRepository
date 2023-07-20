import { Toaster as ReactHotToast, ToasterProps } from 'react-hot-toast';
import styles from '../assets/sass/_exports.module.scss';

const toasterOptions: ToasterProps = {
  position: 'top-center',
  reverseOrder: false,
  gutter: 8,
  containerClassName: '',
  containerStyle: { margin: '8px' },
  toastOptions: {
    // Define default options
    className: '',
    duration: 5000,
    style: {
      fontSize: '18px',
      fontWeight: '500',
      padding: '16px 24px',
      background: styles.colorToastRoyalBlue,
      color: 'white',
    },

    // Default options for specific types
    success: {
      duration: 8000,
      iconTheme: {
        primary: 'green',
        secondary: 'black',
      },
    },
    error: {
      duration: 5000,
      style: {
        background: styles.colorToastRed,
        color: 'white',
        textShadow: '0px 0px 8px hsla(0deg, 0%, 0%, 0.3)',
      },
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
