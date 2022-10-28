import Button from '#Components/custom/buttons/generic/Button';
import IconDelete from '#Svg/icon-delete.svg';
import styles from './ModalSidebar.module.scss';
import SidebarButtons from './SidebarButtons';

type SidebarProps = {
  title: string;
  code: string;
};

function ModalSidebar(props: SidebarProps): JSX.Element {
  const { title, code } = props;

  return (
    <div className={styles.container}>
      <div className={styles.container__subcontainer}>
        <div className={styles.sidebar}>
          <p className={styles.sidebar__title}>
            {title} <span>#</span>
            {code}
          </p>
          <div className={styles.sidebar__from}>
            <p>Bill From</p>
            <div className={styles.sidebar__from__street}>
              <p>Street Address</p>
              <input type="text" />
            </div>
            <div className="">
              <p>City</p>
              <input type="text" />
            </div>
            <div className="">
              <p>Post Code</p>
              <input type="text" />
            </div>
            <div className="">
              <p>Country</p>
              <input type="text" />
            </div>
          </div>
          <div className={styles.sidebar__to}>
            <p>Bill To</p>
            <div className={styles.sidebar__to__name}>
              <p>Client&#39;s Name</p>
              <input type="text" />
            </div>
            <div className={styles.sidebar__to__email}>
              <p>Client&#39;s Email</p>
              <input type="text" />
            </div>
            <div className={styles.sidebar__to__address}>
              <p>Street Address</p>
              <input type="text" />
            </div>
            <div className="">
              <p>City</p>
              <input type="text" />
            </div>
            <div className="">
              <p>Post Code</p>
              <input type="text" />
            </div>
            <div className="">
              <p>Country</p>
              <input type="text" />
            </div>
          </div>
          <div className={styles.sidebar__details}>
            <div className="">
              <p>Invoice Date</p>
              <input type="text" />
            </div>
            <div className="">
              <p>Payment Terms</p>
              <input type="text" />
            </div>
            <div className={styles.sidebar__details__description}>
              <p>Project Description</p>
              <input type="text" />
            </div>
          </div>
          <div className={styles.sidebar__itemlist}>
            <p className={styles.sidebar__itemlist__title}>Item List</p>
            <div className={styles.sidebar__itemlist__grid}>
              <p>Item Name</p>
              <p>Qty.</p>
              <p>Price</p>
              <p>Total</p>
              <input
                className={styles['sidebar__itemlist__grid--col1']}
                type="text"
              />
              <input
                className={styles['sidebar__itemlist__grid--col2']}
                type="text"
              />
              <input
                className={styles['sidebar__itemlist__grid--col3']}
                type="text"
              />
              <p className={styles['sidebar__itemlist__grid--col4']}>£156.00</p>
              <img
                className={styles['sidebar__itemlist__grid--col5']}
                src={IconDelete}
                alt=""
              />
              <div className={styles.sidebar__itemlist__grid__btnAddItem}>
                <Button
                  text="+ Add New Item"
                  color="grey"
                  // eslint-disable-next-line unicorn/no-useless-undefined
                  onClick={() => undefined}
                  value="additem"
                  disabled={false}
                />
              </div>
            </div>
          </div>
          <SidebarButtons>
            {title === 'Edit' ? (
              <div className={styles.sidebar__buttons__editInvoice}>
                <div>
                  <Button
                    text="Cancel"
                    color="grey"
                    // eslint-disable-next-line unicorn/no-useless-undefined
                    onClick={() => undefined}
                    value="cancel"
                    disabled={false}
                  />
                </div>
                <div>
                  <Button
                    text="Save Changes"
                    color="purple"
                    // eslint-disable-next-line unicorn/no-useless-undefined
                    onClick={() => undefined}
                    value="save"
                    disabled={false}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.sidebar__buttons__newInvoice}>
                <div>
                  <Button
                    text="Discard"
                    color="grey"
                    // eslint-disable-next-line unicorn/no-useless-undefined
                    onClick={() => undefined}
                    value="cancel"
                    disabled={false}
                  />
                </div>
                <div className={styles.sidebar__buttons__newInvoice__group}>
                  <div>
                    <Button
                      text="Save as Draft"
                      color="dark-blue"
                      // eslint-disable-next-line unicorn/no-useless-undefined
                      onClick={() => undefined}
                      value="save&send"
                      disabled={false}
                    />
                  </div>
                  <div>
                    <Button
                      text="Save & Send"
                      color="purple"
                      // eslint-disable-next-line unicorn/no-useless-undefined
                      onClick={() => undefined}
                      value="save&send"
                      disabled={false}
                    />
                  </div>
                </div>
              </div>
            )}
          </SidebarButtons>
        </div>
      </div>
    </div>
  );
}

export default ModalSidebar;
