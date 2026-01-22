import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const initialBlogList = [
    { id: 1, content: "React Hooks Guida Completa: useState, useEffect e useContext spiegati passo passo" },
    { id: 2, content: "CSS Grid vs Flexbox: quando usare quale layout system nei progetti moderni" },
    { id: 3, content: "JavaScript async/await: gestire Promise senza callback hell con best practices 2026" },
    { id: 4, content: "Performance React: useMemo, useCallback e React.memo per app velocissime" }
];



export default function BlogList() {

    const [blogs, setBlogs] = useState(initialBlogList);
    const [newBlog, setNewBlog] = useState("");


    function addBlog(e) {
        e.preventDefault();
        const newBlogList = {
            id: blogs.length + 1,
            content: newBlog
        };
        setBlogs([...blogs, newBlogList]);
        setNewBlog("");

    }

    function removeBlog(i) {
        const newBlogList = blogs.filter((_, index) => {
            return index !== 0
        })
        setBlogs(newBlogList)

    }



    return (

        <div>
            <h1>Blog</h1>

            <div className="container mt-5">
                {blogs.map((blog) => {
                    return (<div key={blog.id} className="border border-2 border-primary rounded p-2 bg-light d-flex align-items-center justify-content-between">
                        <p className="m-0">
                            {blog.content}
                        </p>
                        <button className="btn btn-light " onClick={() => removeBlog(blog.id)}><FontAwesomeIcon icon={faMinus} /></button>
                    </div>
                    )
                })}
            </div>
            <form onSubmit={addBlog}>
                <div className="container input-group">
                    <input type="text"
                        className="form-control rounded"
                        placeholder="Aggiungi un blog"
                        value={newBlog}
                        onChange={element => { setNewBlog(element.target.value) }} />
                    <button className="btn btn-primary">Aggiungi</button>
                </div>
            </form>
        </div>

    )
}