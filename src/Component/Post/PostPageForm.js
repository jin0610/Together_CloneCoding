const PostPageForm =(props)=>{
    const {form, onSubmit} =props
    return(
        <form onSubmit={onSubmit}>
            <input
                type="file"
                name="profile_files"
                multiple="multiple"
            />
            <input type="text" name="title" placeholder="title" value={form.title}/>
            <input type="text" name="content" placeholder="content" value={form.content}/>
            <input type="text" name="targetDonation" placeholder="targetDonation" value={form.targetDonation}/>
            <input type="date" name="startDate" placeholder="startDate" value={form.startDate}/>
            <input type="date" name="finishDate" placeholder="finishDate" value={form.finishDate}/>
            <input type="radio" name="categoryId" /><label For="categoryId">1</label>


            <button type="submit">게시</button>
        </form>
    )
}
export default PostPageForm