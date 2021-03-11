import React, { useState, useEffect } from "react";

const Booklist = props => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        const result = props
            .getData?.(props.language)
            .then((response) => setBookData(response));
    }, [props]);
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">署名</th>
                        <th scope="col">著者</th>
                        <th scope="col">出版年月</th>
                        <th scope="col">画像</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookData === null ? (
                            <p>now loading...</p>
                        ) : (
                            bookData.data.items.map((books, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{books.volumeInfo.title}</td>
                                    <td>{books.volumeInfo.authors}</td>
                                    <td>{books.volumeInfo.publishedDate}</td>
                                    {/* <td>{books.volumeInfo.imageLinks.smallThumbnail ? <img src={books.volumeInfo.imageLinks.smallThumbnail} alt="" /> : 'NoImage'}</td> */}
                                </tr>
                            ))
                        )
                    }

                </tbody>
            </table>
        </div>
    );
}

export default Booklist;
