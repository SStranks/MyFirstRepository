import Status from '#Components/custom/buttons/status/Status';
import IconArrowLeft from '#Svg/icon-arrow-left.svg';
import styles from './InvoiceEdit.module.scss';

function InvoiceEdit(): JSX.Element {
  // TEMP DEV: .
  const status = 'pending';

  return (
    <div className={styles.container}>
      <div className={styles.container__back}>
        <img src={IconArrowLeft} alt="" />
        <p>Go Back</p>
      </div>
      <div className={styles.container__statusBar}>
        <div className={styles.container__statusBar__status}>
          <p>Status</p>
          <Status status={status} />
        </div>
        <div className={styles.container__statusBar__buttons}>
          {/* // TODO:  Convert into button components */}
          <div className={styles.tmpbtn}>Edit</div>
          <div className={styles.tmpbtn}>Delete</div>
          <div className={styles.tmpbtn}>Mark as Paid</div>
        </div>
      </div>
      <div className={styles.container__invoice}>
        <div className="flex">
          <div className="">
            <p>#XM9141</p>
            <p>Graphic Design</p>
          </div>
          <div className="">
            <p>
              19 Union Terrace
              <br />
              London
              <br />
              E1 3EZ
              <br />
              United Kingdom
            </p>
          </div>
        </div>
        <div className="grid">
          <div className="">
            <p>Invoice Date</p>
            <p>21 Aug 2021</p>
          </div>
          <div className="">
            <p>Payment Due</p>
            <p>20 Sep 2021</p>
          </div>
          <div className="">
            <p>Bill To</p>
            <p>Alex Grim</p>
            <p>
              84 Church Way
              <br />
              Bradford
              <br />
              BD1 9FB
              <br />
              United Kingdom
            </p>
          </div>
          <div className="">
            <p>Sent to</p>
            <p>alexgrim@mail.com</p>
          </div>
        </div>
        <div className="grid">
          <p>Item Name</p>
          <p>QTY.</p>
          <p>Price</p>
          <p>Total</p>
          <p>Banner Design</p>
          <p>1</p>
          <p>£ 156.00</p>
          <p>£ 156.00</p>
          <div className="">
            <p>Amount Due</p>
            <p>£ 556.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceEdit;
