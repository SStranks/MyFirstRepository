import Button from '#Components/custom/buttons/generic/Button';
import IconDelete from '#Svg/icon-delete.svg';
import styles from './ModalSidebar.module.scss';

type SidebarProps = {
  title: string;
};

function ModalSidebar(props: SidebarProps): JSX.Element {
  const { title } = props;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3>{title}</h3>
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
          <div className="">
            <p>Client&#39;s Name</p>
            <input type="text" />
          </div>
          <div className="">
            <p>Client&#39;s Email</p>
            <input type="text" />
          </div>
          <div className="">
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
          <div className="">
            <p>Project Description</p>
            <input type="text" />
          </div>
        </div>
        <div className={styles.sidebar__itemlist}>
          <h4>Item List</h4>
          <div className={styles.sidebar__itemlist__grid}>
            <p>Item Name</p>
            <p>Qty.</p>
            <p>Price</p>
            <p>Total</p>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <p>£156.00</p>
            <img src={IconDelete} alt="" />
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
        <div className={styles.sidebar__buttons}>
          <Button
            text="Cancel"
            color="grey"
            // eslint-disable-next-line unicorn/no-useless-undefined
            onClick={() => undefined}
            value="cancel"
            disabled={false}
          />
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
    </div>
  );
}

export default ModalSidebar;
