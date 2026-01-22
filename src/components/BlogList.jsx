import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const initialBlogList = [
    "React Hooks Guida Completa",
    "CSS Grid vs Flexbox",
    "JavaScript async/await",
    "Performance React"
];


export default function BlogList() {

    const [blogs, setBlogs] = useState(initialBlogList);
    const [newBlog, setNewBlog] = useState("");

    // return principale della funzione e component BlogList //
    function addBlog(e) {
        e.preventDefault();
        const newBlogList = [...blogs, newBlog]
        setBlogs(newBlogList);
        setNewBlog("");

    }

    function removeBlog(i) {
        const newBlogList = blogs.filter((_, index) => {
            return index !== i
        })
        setBlogs(newBlogList)

    }



    return (

        <div>
            <h1>Blog</h1>

            <div className="container mt-5">
                {blogs.map((blog, index) => {
                    return (<div key={index} className="border border-2 border-primary rounded p-2 bg-light d-flex align-items-center justify-content-between">
                        <p className="m-0">
                            {blog}
                        </p>
                        <button className="btn btn-light " onClick={() => removeBlog(index)}><FontAwesomeIcon icon={faMinus} /></button>
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