import styles from './style.less';
import Tag from '@/components/tag'
export default () => {
  return (
    <div className={styles['list-box']}>
      <div className={'container article'}>
        <div className={styles.filter}>
          <div>
            <Tag />
          </div>
          {/* <div>
            <select name="" id=""></select>
          </div> */}
        </div>
        <div className="box box-2">1</div>
        <div className="box box-2">2</div>
        <div className="box box-2">3</div>
        <div className="box box-2">4</div>
        <div className="box box-2">1</div>
        <div className="box box-2">2</div>
        <div className="box box-2">3</div>
        <div className="box box-2">4</div>
        <div className="box box-2">1</div>
        <div className="box box-2">2</div>
        <div className="box box-2">3</div>
        <div className="box box-2">4</div>
      </div>
    </div>
  );
};
