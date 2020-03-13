import Header from '../components/header';
import Footer from '../components/footer';
function LoginLayout(props) {
  return (
    <>
      <Header></Header>
      <div className="page">
        {props.children}
        <Footer></Footer>
      </div>
    </>
  );
}

export default LoginLayout;
