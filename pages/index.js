import Homeindex from "../src/pages/home/homeIndex";
export async function getServerSideProps(context) {
  return {
    props: {
        data:"hi"
    },
  }
}
export default function Home(props) {
  return (
    <div style={{minHeight:"100vh"}}>
      <Homeindex {...props} />
    </div>
  );
}
