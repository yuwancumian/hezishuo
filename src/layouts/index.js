import Header from '../components/header';
import Footer from '../components/footer';
function BasicLayout(props) {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
}

export default BasicLayout;
