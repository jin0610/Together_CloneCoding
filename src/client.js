import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies()

const client = axios.create({
    baseURL: '',
    headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "*/*",
        //'x-access-token':,
        
    }  
})

export function logout() {
    console.log('로그아웃')
    cookies.remove('refresh_token')
}

// client.interceptors.response.use(
//     response =>{
      
//       return response;
//     }, error => {
//       if(error.response.status === undefined) {
//         alert('실패')
//       }
//       if(error.response.status === 400){
//         if(error.response.data.msg === "Password is incorrect!"){
//           //Request failed with status code 400
//           alert('잘못된 이메일/비밀번호 입니다.');
//         }
//         if(error.response.data.msg === "User is aleady exist!"){
//           //Request failed with status code 400
//           alert('존재하는 이메일입니다.');
//         }
//       } 
//         return Promise.reject(error);
//       },
//   )

export default client;