import axios from 'axios';

/*
const initialState = () => {

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=> {
    //console.log(res);
    return (res);
    })

}

*/

const initialState = [
        {
          "userId": 1,
          "id": 1,
          "title": "quidem molestiae enim"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "sunt qui excepturi placeat culpa"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "omnis laborum odio"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "non esse culpa molestiae omnis sed optio"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "eaque aut omnis a"
        },
        {
          "userId": 1,
          "id": 6,
          "title": "natus impedit quibusdam illo est"
        }
]



const FakeData = (state=initialState) => {
    let newState = {...state};
    //console.log(state);
    //console.log(newState);

    return newState;
}

export default FakeData;