import BasicNav from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleQuestion from '../components/questioncard';
import SingleComment from '../components/commentcard';

function Single() {
    return(
        <div>
            <BasicNav />
            <SingleQuestion />
            <h3 style={{marginTop: "3%", marginLeft: "12%", marginBottom: "1%"}}> Comments: </h3>
            <SingleComment />
            <SingleComment />
        </div>
    );
}

export default Single