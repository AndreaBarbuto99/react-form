import { useState } from "react";

const initialBlogList = [
    "10 Trucchi React per Sviluppatori alle Prime Armi",
    "Dal BBQ Perfetto al Codice Pulito: Lezioni di Precisione",
    "Masterizza JavaScript: Da Zero a LeetCode Hero",
    "Automazione Web con JS: Bot per il Tuo Workflow Quotidiano"
];

export default function BlogList() {




    // return principale della funzione e component BlogList //
    return (
        <div>
            <h1>Blog</h1>
            <div className="container mt-5">
                {initialBlogList.map((blog) => {
                    return <p className="border border-2 border-primary rounded p-2 bg-light">{blog}</p>
                })}


            </div>
        </div>
    )
}