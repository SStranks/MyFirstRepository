/* eslint-disable react/prop-types */
import Tag from '../custom/tag/Tag';
import styles from './_AsideTags.module.scss';

function AsideTags(props) {
  const { setCategoryFilter } = props;

  const onChange = (e) => {
    setCategoryFilter(e.target.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <Tag
          title="All"
          name="tag-group"
          id="tag-all"
          onChange={onChange}
          defaultChecked
        />
        <Tag title="UI" name="tag-group" id="tag-UI" onChange={onChange} />
        <Tag title="UX" name="tag-group" id="tag-UX" onChange={onChange} />
        <Tag
          title="Enhancement"
          name="tag-group"
          id="tag-enhancement"
          onChange={onChange}
        />
        <Tag title="Bug" name="tag-group" id="tag-bug" onChange={onChange} />
        <Tag
          title="Feature"
          name="tag-group"
          id="tag-feature"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default AsideTags;
