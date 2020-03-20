import styles from './style.less';
export default () =>{
  return (
    <div className={styles["list-box"]}>
    <div className={'container article'}>
       <div className="tag">
        <div>item1</div>
        <div>item2</div>
        <div>item3</div>
        <div>item4</div>
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
  )
}
