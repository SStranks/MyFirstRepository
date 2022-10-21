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
        <div className={styles.container__invoice__identity}>
          <div className={styles.container__invoice__identity__code}>
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
        <div className={styles.container__invoice__details}>
          <div className={styles.container__invoice__details__date}>
            <p>Invoice Date</p>
            <p>21 Aug 2021</p>
          </div>
          <div className={styles.container__invoice__details__due}>
            <p>Payment Due</p>
            <p>20 Sep 2021</p>
          </div>
          <div className={styles.container__invoice__details__recipient}>
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
          <div className={styles.container__invoice__details__email}>
            <p>Sent to</p>
            <p>alexgrim@mail.com</p>
          </div>
        </div>
        <div className={styles.container__invoice__payment}>
          <div className={styles.container__invoice__payment__grid}>
            <p className={styles.container__invoice__payment__grid__name}>
              Item Name
            </p>
            <p className={styles.container__invoice__payment__grid__qty}>
              QTY.
            </p>
            <p className={styles.container__invoice__payment__grid__price}>
              Price
            </p>
            <p className={styles.container__invoice__payment__grid__total}>
              Total
            </p>
            <p className={styles.container__invoice__payment__grid__name}>
              Banner Design
            </p>
            <p className={styles.container__invoice__payment__grid__qty}>1</p>
            <p className={styles.container__invoice__payment__grid__total}>
              £ 156.00
            </p>
            <p className={styles.container__invoice__payment__grid__price}>
              £ 156.00
            </p>
          </div>
          <div className={styles.container__invoice__payment__total}>
            <p className={styles.container__invoice__payment__total__due}>
              Amount Due
            </p>
            <p className={styles.container__invoice__payment__total__total}>
              £ 556.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceEdit;
