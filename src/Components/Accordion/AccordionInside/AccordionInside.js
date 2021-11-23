import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./accordionInside.scss";

const AccordionInside = ({ appType, title, isActive }) => {
    const [active, setActive] = useState(isActive);

    const rowTable = appType.map(
        (tr) => (
            <tr key={tr.id}>
                <td className="appliication-name">
                    <Link to={`/#${tr.app.split(" ").join("-")}`}>
                        {tr.app ? tr.app : ""}
                    </Link>
                </td>
                <td className="author-name">
                    <Link to={`/#${tr.app.split(" ").join("-")}`}>
                        {tr.author && tr.author.name ? tr.author.name : ""}
                    </Link>
                </td>
                <td className="appliication-version">
                    <Link to={`/#${tr.app.split(" ").join("-")}`}>
                        {tr.version ? tr.version : ""}
                    </Link>
                </td>
            </tr>
        )
        //render empty string if records are empty
    );

    return (
        <div className="accordion-item">
            <button className="accordion-header" onClick={() => setActive(!active)}>
                {title}
                <span className={`accordion-icon ${active ? "open" : "close"} `} />
            </button>
            {active ? (
                <div className="inside-accordion">
                    <Router>
                        <table>
                            <thead>
                            <tr>
                                <th className="appliication-name">Application name</th>
                                <th className="author-name">Author</th>
                                <th className="appliication-version">Version</th>
                            </tr>
                            </thead>
                            <tbody>{rowTable}</tbody>
                        </table>
                    </Router>
                </div>
            ) : null}
        </div>
    );
};

export default AccordionInside;
