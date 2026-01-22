import { useState } from "react";

const initialBlogList = [
    "10 Trucchi React per Sviluppatori alle Prime Armi",
    "Dal BBQ Perfetto al Codice Pulito: Lezioni di Precisione",
    "Masterizza JavaScript: Da Zero a LeetCode Hero",
    "Automazione Web con JS: Bot per il Tuo Workflow Quotidiano"
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



    return (

        <div>
            <h1>Blog</h1>

            <div className="container mt-5">
                {blogs.map((blog, index) => {
                    return <p key={index} className="border border-2 border-primary rounded p-2 bg-light">{blog}</p>
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