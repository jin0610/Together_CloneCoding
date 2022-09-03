import { useState } from "react";
import client from "../../client";
import PostPageForm from "../../Component/Post/PostPageForm";

const PostContainer = ()=>{

    const [form, setForm] = useState({
        title:'',
        content: '',
        targetDonation: '',
        startDate:'',
        finishDate:'',
        categoryId:1
    })

    const onChagne =e =>{
        const {value, name} = e.target;
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit= (e)=>{
        e.preventDefault();
        e.persist();
        const {title, content, targetDonation,startDate, finishDate, categoryId}= form;

        let files = e.target.profile_files.files;
        let formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i]);
        }

        const data = {title, content,nickname}
        const dataSet = {
                title: String(title),
                content: String(content),
                startDate: String(startDate),
                finishDate: String(finishDate),
                categoryId: String(categoryId),
        };

        client.post("/board",JSON.stringify(dataSet)).then(res=>{
            console.log(res)
        })


    }
    // formData.append("dto", new Blob([JSON.stringify(dataSet)], {
    //     type: 'application/json'}));
  
    // const postSurvey = await axios({
    //     method: "POST",
    //     url: `http://localhost:8080/test`,
    //     mode: "cors",
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     data: formData,
    //     });
  
    //     console.log(postSurvey);
    // };

    

    return(
        <PostPageForm 
        onSubmit={onSubmit}
        form={form}
        />
    )
}

export default PostContainer